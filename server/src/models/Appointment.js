import mongoose from 'mongoose';
const appointmentSchema = new mongoose.Schema({
  parentName: { type: String, required: true, trim: true },
  childName: { type: String, required: true, trim: true },
  age: { type: Number, min: 0 },
  phone: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  therapyType: { type: String, required: true, trim: true },
  appointmentDate: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected', 'completed'], default: 'pending' },
  adminNote: String,
}, { timestamps: true });
export default mongoose.model('Appointment', appointmentSchema);
