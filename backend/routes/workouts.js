/** @format */

const express = require("express");
const {
  createWorkout,
  deleteWorkout,
  gelAllWorkouts,
  getSingleWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", gelAllWorkouts);

// GET a single workout
router.get("/:id", getSingleWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/", deleteWorkout);

// UPDATE a workout
router.patch("/", updateWorkout);

module.exports = router;
