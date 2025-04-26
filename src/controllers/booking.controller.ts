import { Request, Response } from "express";
import { db } from "../db/db.js";
import { bookings, hospitals } from "../db/schema/booking.js";
import { bookingSchema } from "../validators/booking.validator.js";
import { eq } from "drizzle-orm";

export const createBooking = async (req: Request, res: Response) => {
  const { error, value } = bookingSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { hospitalId, patientName } = value;

  try {
    const hospital = await db.select().from(hospitals).where(eq(hospitals.id, hospitalId));

    if (hospital.length === 0) {
      return res.status(404).json({ error: "Hospital not found." });
    }

    const [newBooking] = await db
      .insert(bookings)
      .values({ hospitalId, patientName })
      .returning();

    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ error: "Failed to create booking." });
  }
};
