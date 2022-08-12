/** @format */

const express = require("express");

const Workout = require("../models/Workouts");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "GET workout by id " + req.body });
});

router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const newWorkout = await Workout.create({ title, reps, load });
    res.json(newWorkout);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
  res.json({ msg: "POST a new workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a workout" });
});

module.exports = router;
