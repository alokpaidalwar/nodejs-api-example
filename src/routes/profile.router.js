import express from 'express';

import { read, readById, create } from '../controllers/profile.js';

const router = express.Router();

router.get('/api/profile', read);
router.get('/api/profile/:id', readById);
router.post('/api/profile', create);

export default router;
