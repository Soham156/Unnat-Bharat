import Scheme from "../models/schemeModel.js";

export const schemeController = {
  addScheme: async (req, res) => {
    const {
      name,
      category,
      description,
      eligibility,
      benefits,
      applicationLink,
    } = req.body;

    try {
      const newScheme = new Scheme({
        name,
        category,
        description,
        eligibility,
        benefits,
        applicationLink,
      });

      await newScheme.save();

      res
        .status(201)
        .json({ message: "Scheme added successfully", scheme: newScheme });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  },

  getSchemes: async (req, res) => {
    try {
      const schemes = await Scheme.find();
      res.json(schemes);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  },

  getSchemeById: async (req, res) => {
    try {
      const scheme = await Scheme.findById(req.params.id);
      if (!scheme) {
        return res.status(404).json({ message: "Scheme not found" });
      }
      res.json(scheme);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  },

  updateScheme: async (req, res) => {
    const {
      name,
      category,
      description,
      eligibility,
      benefits,
      applicationLink,
    } = req.body;

    try {
      const scheme = await Scheme.findById(req.params.id);
      if (!scheme) {
        return res.status(404).json({ message: "Scheme not found" });
      }

      scheme.name = name || scheme.name;
      scheme.category = category || scheme.category;
      scheme.description = description || scheme.description;
      scheme.eligibility = eligibility || scheme.eligibility;
      scheme.benefits = benefits || scheme.benefits;
      scheme.applicationLink = applicationLink || scheme.applicationLink;

      await scheme.save();

      res.json({ message: "Scheme updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  },

  deleteScheme: async (req, res) => {
    try {
      const scheme = await Scheme.findById(req.params.id);
      if (!scheme) {
        return res.status(404).json({ message: "Scheme not found" });
      }

      await scheme.remove();

      res.json({ message: "Scheme deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  },
};
