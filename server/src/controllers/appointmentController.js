import Appointment from '../models/Appointment.js';
import { asyncHandler } from '../middleware/errorHandler.js';

export const updateAppointmentStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  if (!['approved', 'rejected', 'completed', 'pending'].includes(status)) return res.status(400).json({ message: 'Invalid appointment status' });
  const appointment = await Appointment.findByIdAndUpdate(req.params.id, { status, adminNote: req.body.adminNote }, { new: true });
  if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
  res.json(appointment);
});
