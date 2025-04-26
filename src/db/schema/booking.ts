import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const hospitals = pgTable("hospitals", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  address: text("address"),
});

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  hospitalId: integer("hospital_id").references(() => hospitals.id),
  patientName: text("patient_name").notNull(),
});
