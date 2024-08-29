import Yojana from "../models/yojanaModel.js";

// Add a new Yojana
export const addYojana = async (req, res) => {
  try {
    const { yojanaName, yojanaLink } = req.body;

    // Validate the input
    if (!yojanaName || !yojanaLink) {
      return res
        .status(400)
        .json({ message: "Please provide both Yojana name and link." });
    }

    // Create a new Yojana
    const newYojana = new Yojana({
      yojanaName,
      yojanaLink,
    });

    // Save the Yojana to the database
    await newYojana.save();

    return res
      .status(201)
      .json({ message: "Yojana added successfully!", yojana: newYojana });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to add Yojana.", error: error.message });
  }
};

// Get all Yojanas
export const getAllYojanas = async (req, res) => {
  try {
    const yojanas = await Yojana.find({});
    return res.status(200).json(yojanas);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to retrieve Yojanas.", error: error.message });
  }
};
