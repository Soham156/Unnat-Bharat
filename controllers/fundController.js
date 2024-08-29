import Fund from "../models/fundModel.js";

export const createFund = async (req, res) => {
  try {
    const { projectName, allocatedFund } = req.body;

    // Create a new fund entry
    const newFund = await Fund.create({ projectName, allocatedFund });

    res.status(201).json({
      success: true,
      data: newFund,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error. Could not create fund entry.",
      error: error.message,
    });
  }
};

export const getFunds = async (req, res) => {
  try {
    const funds = await Fund.find();

    res.status(200).json({
      success: true,
      data: funds,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error. Could not retrieve funds.",
      error: error.message,
    });
  }
};

export const getFundById = async (req, res) => {
  try {
    const fund = await Fund.findById(req.params.id);

    if (!fund) {
      return res.status(404).json({
        success: false,
        message: "Fund not found",
      });
    }

    res.status(200).json({
      success: true,
      data: fund,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error. Could not retrieve the fund.",
      error: error.message,
    });
  }
};

export const deleteFund = async (req, res) => {
  try {
    const fund = await Fund.findByIdAndDelete(req.params.id);

    if (!fund) {
      return res.status(404).json({
        success: false,
        message: "Fund not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Fund entry deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error. Could not delete the fund.",
      error: error.message,
    });
  }
};
