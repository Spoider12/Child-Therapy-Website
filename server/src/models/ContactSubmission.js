import mongoose from 'mongoose';
const contactSubmissionSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  service: { type: String, trim: true },
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
}, { timestamps: true });
export default mongoose.model('ContactSubmission', contactSubmissionSchema);
