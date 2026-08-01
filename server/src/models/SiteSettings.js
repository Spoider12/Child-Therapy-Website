import mongoose from 'mongoose';
const siteSettingsSchema = new mongoose.Schema({
  logo: { url: String, publicId: String },
  contact: { phone: String, email: String, address: String },
  social: { facebook: String, instagram: String, linkedin: String, youtube: String },
  email: { smtpHost: String, smtpPort: Number, smtpUser: String, fromEmail: String },
}, { timestamps: true });
export default mongoose.model('SiteSettings', siteSettingsSchema);
