import { Router } from 'express';
import club from '../controllers/club.controller';
import { authenticateToken } from '../middlewares/auth.middleware';

const router = Router();

router.post('/create', authenticateToken, club.createClub);
router.post('/join', authenticateToken, club.joinClub);

export default router;
