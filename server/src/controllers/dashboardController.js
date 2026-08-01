import Blog from '../models/Blog.js';
import Testimonial from '../models/Testimonial.js';
import GalleryImage from '../models/GalleryImage.js';
import ContactSubmission from '../models/ContactSubmission.js';
import Appointment from '../models/Appointment.js';
import Activity from '../models/Activity.js';
import { asyncHandler } from '../middleware/errorHandler.js';

export const overview = asyncHandler(async (req, res) => {
  const [blogs, testimonials, galleryImages, contacts, appointments, activities] = await Promise.all([
    Blog.countDocuments(),
    Testimonial.countDocuments(),
    GalleryImage.countDocuments(),
    ContactSubmission.countDocuments(),
    Appointment.countDocuments(),
    Activity.find().sort({ createdAt: -1 }).limit(10).populate('actor', 'name email'),
  ]);
  res.json({ totals: { blogs, testimonials, galleryImages, contacts, appointments }, activities });
});
