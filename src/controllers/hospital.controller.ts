import { Request, Response } from "express";
import { db } from "../db/db.js";
import { hospitals } from "../db/schema/booking.js";

export const getHospitals = async (req: Request, res: Response) => {
  try {
    const allHospitals = await db.select().from(hospitals);
    res.json(allHospitals);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch hospitals." });
  }
};
