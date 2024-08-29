import mongoose from "mongoose";

const SchemeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    eligibility: {
      type: String,
      required: true,
    },
    benefits: {
      type: String,
      required: true,
    },
    applicationLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Scheme = mongoose.model("Scheme", SchemeSchema);
export default Scheme;
