import { Router } from 'express';
import { overview } from '../controllers/dashboardController.js';
const router = Router();
router.get('/overview', overview);
export default router;
