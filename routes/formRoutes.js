import express from "express";
// import { isAdmin, requireSignIn } from "../middlewares/authmiddleware.js";

import { addYojana, getAllYojanas } from "../controllers/yojanaController.js";
import {
  createFund,
  getFundById,
  getFunds,
} from "../controllers/fundController.js";

const router = express.Router();

router.post("/yojana", addYojana);

router.get("/get-yojana", getAllYojanas);

router.post("/fund-entry", createFund);

router.get("/get-fund-entry", getFunds);

export default router;
