import { Router } from 'express';
import { login, logout, me } from '../controllers/authController.js';
import { protect, requireAdmin } from '../middleware/auth.js';
const router = Router();
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', protect, requireAdmin, me);
router.get('/me', protect, requireAdmin, me);
export default router;