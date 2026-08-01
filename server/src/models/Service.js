import mongoose from 'mongoose';
const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  description: { type: String, required: true },
  image: { url: String, publicId: String },
  isActive: { type: Boolean, default: true },
  sortOrder: { type: Number, default: 0 },
}, { timestamps: true });
export default mongoose.model('Service', serviceSchema);
