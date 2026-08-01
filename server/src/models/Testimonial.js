import mongoose from 'mongoose';
const testimonialSchema = new mongoose.Schema({
  clientName: { type: String, required: true, trim: true },
  clientPhoto: { url: String, publicId: String },
  rating: { type: Number, min: 1, max: 5, required: true },
  reviewText: { type: String, required: true },
  isVisible: { type: Boolean, default: true },
}, { timestamps: true });
export default mongoose.model('Testimonial', testimonialSchema);
