import { Router } from "express";
import FormController from "../controllers/form.controller.js";
import Components from "../controllers/components.controller.js";
const router = Router();

router.get("/", FormController.get);

router.get("/components/:name", Components.get);

export default router;
