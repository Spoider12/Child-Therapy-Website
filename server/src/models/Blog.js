import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({ url: String, publicId: String, alt: String }, { _id: false });

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  excerpt: String,
  content: { type: String, required: true },
  category: { type: String, required: true, trim: true },
  featuredImage: imageSchema,
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  publishedAt: Date,
  seo: { metaTitle: String, metaDescription: String, keywords: [String] },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default mongoose.model('Blog', blogSchema);
