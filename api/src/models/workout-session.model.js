import mongoose from "mongoose";

const workoutSessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    template: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WorkoutTemplate",
    },

    name: String,

    startedAt: Date,

    endedAt: Date,

    durationMinutes: Number,

    notes: String,

    exercises: [
      {
        exercise: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Exercise",
        },

        sets: [
          {
            reps: Number,
            weight: Number,
            completed: Boolean,
            durationSeconds: Number,
          },
        ],
      },
    ],
  },
  { timestamps: true },
);

const WorkoutSession = mongoose.model("WorkoutSession", workoutSessionSchema);

export default WorkoutSession;

