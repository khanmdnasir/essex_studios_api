import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

// Login Schema
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// Register Schema
const registerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(30)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$"
      )
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      "string.min": "Password must be at least 8 characters long.",
      "string.max": "Password must not exceed 30 characters.",
    }),
});

// Validate Login Middleware
export const validateLogin = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = loginSchema.validate(req.body, { abortEarly: false });
  if (error) {
    res.status(400).json({
      error_type: "validation_error",
      errors: error.details.map((err) => err.message),
    });
    return;
  }
  next();
};

// Validate Register Middleware
export const validateRegister = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = registerSchema.validate(req.body, { abortEarly: false });
  if (error) {
    res.status(400).json({
      error_type: "validation_error",
      errors: error.details.map((err) => err.message),
    });
    return;
  }
  next();
};
