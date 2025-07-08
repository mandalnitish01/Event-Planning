import express from "express";
import { sendMessage } from "../controllers/messageController.js";

const router = express.Router();
//create a route
router.post("/send", sendMessage);
export default router;