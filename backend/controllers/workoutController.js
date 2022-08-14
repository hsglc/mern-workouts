/** @format */

const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  // add doc to db
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const gelAllWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    workouts,
  });
};

const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "Workout not found" });
  }
  res.status(200).json({
    success: true,
    workout,
  });
};

const deleteWorkout = async (req, res) => {
  const { id } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  const workout = await Workout.findByIdAndDelete({
    _id: id,
  });
  if (!workout) {
    return res.status(404).json({ error: "Workout not found" });
  }
  res.status(200).json({
    success: true,
  });
};

const updateWorkout = async (req, res) => {
  const { id, title, load, reps } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  const workout = await Workout.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      title,
      load,
      reps,
    }
  );
  if (!workout) {
    return res.status(404).json({ error: "Workout not found" });
  }
  res.status(200).json({
    success: true,
  });
};

module.exports = {
  createWorkout,
  gelAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
};
