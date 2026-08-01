import mongoose from 'mongoose';
const galleryImageSchema = new mongoose.Schema({
  title: String,
  category: { type: String, default: 'General', trim: true },
  image: { url: { type: String, required: true }, publicId: { type: String, required: true } },
  sortOrder: { type: Number, default: 0 },
  isVisible: { type: Boolean, default: true },
}, { timestamps: true });
export default mongoose.model('GalleryImage', galleryImageSchema);
