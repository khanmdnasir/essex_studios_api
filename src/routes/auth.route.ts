import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/auth.controller.js';
import { validateLogin, validateRegister } from '../validators/auth.validator.js';

const router = Router();

router.post('/login', validateLogin, loginUser);
router.post('/register', validateRegister, registerUser);

export default router;
