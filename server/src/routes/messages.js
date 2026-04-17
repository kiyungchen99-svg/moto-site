import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// GET /api/messages — newest first
router.get('/', async (req, res, next) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).limit(100);
    res.json(messages);
  } catch (err) {
    next(err);
  }
});

// POST /api/messages — create new message
router.post('/', async (req, res, next) => {
  try {
    const { name, message } = req.body;
    if (!name?.trim() || !message?.trim()) {
      return res.status(400).json({ message: '名字和留言都不能空白' });
    }
    const created = await Message.create({
      name: name.trim().slice(0, 50),
      message: message.trim().slice(0, 500)
    });
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

export default router;
