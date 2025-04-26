import Joi from "joi";

export const bookingSchema = Joi.object({
  hospitalId: Joi.number().integer().required(),
  patientName: Joi.string().min(1).required(),
});
