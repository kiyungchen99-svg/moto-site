import express from 'express';
import SiteConfig from '../models/SiteConfig.js';

const router = express.Router();

// GET /api/profile
router.get('/', async (req, res, next) => {
  try {
    const config = await SiteConfig.findOne();
    res.json(config);
  } catch (err) {
    next(err);
  }
});

export default router;
