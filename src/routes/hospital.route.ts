import { Router } from "express";
import { getHospitals } from "../controllers/hospital.controller.js";

const router = Router();

router.get("/", getHospitals);

export default router;
