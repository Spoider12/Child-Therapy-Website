import { Router } from 'express';
import { asyncHandler } from '../middleware/errorHandler.js';
import Appointment from '../models/Appointment.js';
import ContactSubmission from '../models/ContactSubmission.js';
import { sendContactNotification } from '../services/mailService.js';

const router = Router();

router.post('/appointments', asyncHandler(async (req, res) => {
  const appointment = await Appointment.create({
    parentName: req.body.parentName,
    childName: req.body.childName || req.body.patientName,
    age: req.body.age,
    phone: req.body.phone,
    email: req.body.email,
    therapyType: req.body.therapyType || req.body.therapy,
    appointmentDate: req.body.appointmentDate || req.body.preferredDate,
  });

  res.status(201).json({ message: 'Appointment request submitted.', appointment });
}));

router.post('/contacts', asyncHandler(async (req, res) => {
  const contact = await ContactSubmission.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    service: req.body.service,
    message: req.body.message,
  });

  let emailResult = { sent: false };
  try {
    emailResult = await sendContactNotification(contact);
  } catch (error) {
    console.error('Contact notification email failed:', error.message);
    emailResult = { sent: false, reason: error.message };
  }

  res.status(201).json({
    message: emailResult.sent
      ? 'Message submitted and emailed successfully.'
      : 'Message submitted. Email notification is not configured yet.',
    contact,
    emailSent: emailResult.sent,
    emailReason: emailResult.reason,
  });
}));

export default router;