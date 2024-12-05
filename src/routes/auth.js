import express from "express";
import { signup, login, myInfo } from "../controllers/user.js";
import isAuthenticated from "../middlewares/auth.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.get("/me", isAuthenticated, myInfo);

export default router;