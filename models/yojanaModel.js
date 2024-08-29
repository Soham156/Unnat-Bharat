import mongoose from "mongoose";

const yojanaSchema = new mongoose.Schema(
  {
    yojanaName: {
      type: String,
      required: true,
      trim: true,
    },
    yojanaLink: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Yojana = mongoose.model("Yojana", yojanaSchema);

export default Yojana;
