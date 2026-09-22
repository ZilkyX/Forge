import mongoose from "mongoose";

const workoutScheduleSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    workoutTemplate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WorkoutTemplate",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    scheduleType: {
      type: String,
      enum: ["once", "weekly", "monthly"],
      default: "weekly",
    },

    daysOfWeek: [
      {
        type: Number,
        min: 0,
        max: 6,
      },
    ],

    startDate: {
      type: Date,
      required: true,
    },

    endDate: Date,

    time: {
      hour: {
        type: Number,
        min: 0,
        max: 23,
      },
      minute: {
        type: Number,
        min: 0,
        max: 59,
      },
    },

    reminder: {
      enabled: {
        type: Boolean,
        default: true,
      },
      minutesBefore: {
        type: Number,
        default: 15,
      },
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

const WorkoutSchedule = mongoose.model(
  "WorkoutSchedule",
  workoutScheduleSchema,
);
export default WorkoutSchedule;
