import mongoose from 'mongoose';

const siteConfigSchema = new mongoose.Schema({
  ownerName:   String,
  ownerBio:    String,
  avatarUrl:   String,
  socialLinks: {
    instagram: String,
    youtube:   String,
    email:     String
  },
  siteTitle:   String,
  heroTagline: String
});

export default mongoose.model('SiteConfig', siteConfigSchema);
