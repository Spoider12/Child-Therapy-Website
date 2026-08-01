import { Router } from 'express';
import { createCrudController } from '../controllers/crudFactory.js';
import { setUploadFolder, upload } from '../middleware/upload.js';
import Blog from '../models/Blog.js';
import Testimonial from '../models/Testimonial.js';
import GalleryImage from '../models/GalleryImage.js';
import ContactSubmission from '../models/ContactSubmission.js';
import Appointment from '../models/Appointment.js';
import Service from '../models/Service.js';
import { updateAppointmentStatus } from '../controllers/appointmentController.js';

const resources = [
  ['blogs', Blog, 'blog', 'blogs'],
  ['testimonials', Testimonial, 'testimonial', 'testimonials'],
  ['gallery', GalleryImage, 'gallery image', 'gallery'],
  ['contacts', ContactSubmission, 'contact submission', 'contacts'],
  ['appointments', Appointment, 'appointment', 'appointments'],
  ['services', Service, 'service', 'services'],
];

const router = Router();

for (const [path, Model, label, folder] of resources) {
  const controller = createCrudController(Model, label);
  router.get(`/${path}`, controller.list);
  router.get(`/${path}/:id`, controller.get);
  router.post(`/${path}`, setUploadFolder(folder), upload.single('image'), controller.create);
  router.put(`/${path}/:id`, setUploadFolder(folder), upload.single('image'), controller.update);
  router.delete(`/${path}/:id`, controller.remove);
}

router.patch('/appointments/:id/status', updateAppointmentStatus);
router.post('/gallery/bulk', setUploadFolder('gallery'), upload.array('images', 20), async (req, res) => {
  const images = await GalleryImage.insertMany(req.files.map((file) => ({ title: file.originalname, category: req.body.category || 'General', image: { url: file.path, publicId: file.filename } })));
  res.status(201).json(images);
});

export default router;
