import { Router } from "express";
import { createBooking } from "../controllers/booking.controller.js";

const router = Router();

router.post("/", (req, res) => {
    createBooking(req, res);
});

export default router;
