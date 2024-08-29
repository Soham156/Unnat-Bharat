import Complaint from "../models/complaintModel.js";

export const complaintController = {
  submitComplaint: async (req, res) => {
    const { issueCategory, location, description, image } = req.body;

    try {
      const newComplaint = new Complaint({
        userId: req.user.id,
        issueCategory,
        location,
        description,
        image,
      });

      await newComplaint.save();

      res.status(201).json({
        message: "Complaint submitted successfully",
        complaint: newComplaint,
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  },

  getComplaints: async (req, res) => {
    try {
      const complaints = await Complaint.find();
      res.json(complaints);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  },

  getComplaintById: async (req, res) => {
    try {
      const complaint = await Complaint.findById(req.params.id);
      if (!complaint) {
        return res.status(404).json({ message: "Complaint not found" });
      }
      res.json(complaint);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  },

  updateComplaintStatus: async (req, res) => {
    const { status } = req.body;

    try {
      const complaint = await Complaint.findById(req.params.id);
      if (!complaint) {
        return res.status(404).json({ message: "Complaint not found" });
      }

      complaint.status = status || complaint.status;
      complaint.comments.push({ comment: `Status updated to ${status}` });

      await complaint.save();

      res.json({ message: "Complaint status updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  },

  addComment: async (req, res) => {
    const { comment } = req.body;

    try {
      const complaint = await Complaint.findById(req.params.id);
      if (!complaint) {
        return res.status(404).json({ message: "Complaint not found" });
      }

      complaint.comments.push({ comment });
      await complaint.save();

      res.json({ message: "Comment added successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  },
};
