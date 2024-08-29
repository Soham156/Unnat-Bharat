import mongoose from "mongoose";

const fundSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
      trim: true,
    },
    allocatedFund: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Fund = mongoose.model("Fund", fundSchema);

export default Fund;
