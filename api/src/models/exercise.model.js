import mongoose from "mongoose";
import slugify from "slugify";

const exerciseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    category: {
      type: String,
      enum: ["strength", "cardio", "mobility", "stretching"],
      required: true,
    },

    muscleGroups: [
      {
        type: String,
        enum: [
          "chest",
          "back",
          "shoulders",
          "biceps",
          "triceps",
          "legs",
          "glutes",
          "core",
          "full-body",
        ],
      },
    ],

    equipment: {
      type: String,
      enum: [
        "none",
        "barbell",
        "dumbbell",
        "machine",
        "cable",
        "bodyweight",
        "kettlebell",
        "band",
      ],
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },

    preview: {
      videoUrl: String,
      videoPublicId: String,
      thumbnailUrl: String,
    },

    instructions: {
      setup: String,
      execution: [String],
      breathing: String,
      tips: [String],
    },

    commonMistakes: [String],

    targetMuscles: [String],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

exerciseSchema.index({ slug: 1 });
exerciseSchema.index({ muscleGroups: 1 });

exerciseSchema.pre("validate", function (next) {
  if (!this.slug && this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

export default Exercise;
