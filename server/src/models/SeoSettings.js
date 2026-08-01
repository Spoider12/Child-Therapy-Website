import mongoose from 'mongoose';
const seoSettingsSchema = new mongoose.Schema({
  metaTitle: { type: String, required: true },
  metaDescription: { type: String, required: true },
  keywords: [String],
  openGraph: {
    title: String,
    description: String,
    image: { url: String, publicId: String },
    url: String,
  },
}, { timestamps: true });
export default mongoose.model('SeoSettings', seoSettingsSchema);
