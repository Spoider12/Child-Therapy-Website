import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: `child-therapy/${req.uploadFolder || 'uploads'}`,
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    transformation: [{ quality: 'auto', fetch_format: 'auto' }],
  }),
});

export const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });
export const setUploadFolder = (folder) => (req, res, next) => { req.uploadFolder = folder; next(); };
