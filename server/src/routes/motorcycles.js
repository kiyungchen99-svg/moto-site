import express from 'express';
import Motorcycle from '../models/Motorcycle.js';

const router = express.Router();

// GET /api/motorcycles — all bikes sorted by order
router.get('/', async (req, res, next) => {
  try {
    const bikes = await Motorcycle.find().sort({ order: 1 });
    res.json(bikes);
  } catch (err) {
    next(err);
  }
});

// GET /api/motorcycles/:slug — single bike
router.get('/:slug', async (req, res, next) => {
  try {
    const bike = await Motorcycle.findOne({ slug: req.params.slug });
    if (!bike) return res.status(404).json({ message: 'Bike not found' });
    res.json(bike);
  } catch (err) {
    next(err);
  }
});

export default router;
