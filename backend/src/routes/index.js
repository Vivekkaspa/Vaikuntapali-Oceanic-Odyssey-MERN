import express from "express";
import players from "./api/players.js";

const router = express.Router();

router.use("/player", players);

export default router;
