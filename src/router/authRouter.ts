import express, { Router } from "express";
import { signup, signin, userList } from "../api/auth";

const router: Router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/userList", userList);

export default router;