import express from 'express';

import {
  read,
  readByProfileId,
  createByProfileId,
} from '../controllers/simulator.js';

const router = express.Router();

router.get('/api/simulator', read);
router.get('/api/simulator/:profile_id', readByProfileId);
router.post('/api/simulator/:profile_id', createByProfileId);

export default router;
