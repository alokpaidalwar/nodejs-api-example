import express from 'express';

import {
  readAll,
  read,
  create,
  update,
  remove,
} from '../controllers/post.controller.js';
import { verifyToken, verifyAdminToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/api/post', verifyToken, readAll);
router.get('/api/post/:id', verifyToken, read);
router.post('/api/post', verifyAdminToken, create);
router.patch('/api/post/:id', verifyAdminToken, update);
router.delete('/api/post/:id', verifyAdminToken, remove);

export default router;
