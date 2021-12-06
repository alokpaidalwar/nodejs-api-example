import express from 'express';

import {
  read,
  readByProfileId,
  createByProfileId,
} from '../controllers/favorite.js';

const router = express.Router();

router.get('/api/favorite', read);
router.get('/api/favorite/:profile_id', readByProfileId);
router.post('/api/favorite/:profile_id', createByProfileId);

export default router;
