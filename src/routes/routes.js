import { Router } from "express";
import FormController from "../controllers/form.controller.js";
const router = Router();

router.get("/", FormController.get);

export default router;
