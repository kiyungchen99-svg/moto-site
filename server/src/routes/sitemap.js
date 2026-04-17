import express from 'express';
import Motorcycle from '../models/Motorcycle.js';

const router = express.Router();

const BASE = 'https://moto-site-production.up.railway.app';

router.get('/', async (req, res, next) => {
  try {
    const bikes = await Motorcycle.find().select('slug updatedAt');
    const staticPages = ['', '/about', '/guestbook'];

    const urls = [
      ...staticPages.map(path => `
  <url>
    <loc>${BASE}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '' ? '1.0' : '0.7'}</priority>
  </url>`),
      ...bikes.map(b => `
  <url>
    <loc>${BASE}/bikes/${b.slug}</loc>
    <lastmod>${b.updatedAt.toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`)
    ].join('');

    res.header('Content-Type', 'application/xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`);
  } catch (err) {
    next(err);
  }
});

export default router;
