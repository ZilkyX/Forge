import mongoose from "mongoose";

const workoutTemplateSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    description: String,

    isPublic: {
      type: Boolean,
      default: false,
    },

    exercises: [
      {
        exercise: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Exercise",
        },

        order: Number,

        sets: Number,

        reps: {
          min: Number,
          max: Number,
        },

        restSeconds: Number,
      },
    ],
  },
  { timestamps: true },
);

const WorkoutTemplate = mongoose.model(
  "WorkoutTemplate",
  workoutTemplateSchema,
);

export default WorkoutTemplate;
