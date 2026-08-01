import Activity from '../models/Activity.js';

export const createCrudController = (Model, resource) => ({
  list: async (req, res) => {
    const page = Number(req.query.page || 1);
    const limit = Math.min(Number(req.query.limit || 10), 100);
    const filter = buildFilter(Model, req.query);
    const [items, total] = await Promise.all([
      Model.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit),
      Model.countDocuments(filter),
    ]);
    res.json({ items, pagination: { page, limit, total, pages: Math.ceil(total / limit) } });
  },
  get: async (req, res) => {
    const item = await Model.findById(req.params.id);
    if (!item) return res.status(404).json({ message: `${resource} not found` });
    res.json(item);
  },
  create: async (req, res) => {
    const item = await Model.create(withUploadedImage(req.body, req.file, resource));
    await log(req, 'created', resource, item._id);
    res.status(201).json(item);
  },
  update: async (req, res) => {
    const item = await Model.findByIdAndUpdate(req.params.id, withUploadedImage(req.body, req.file, resource), { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: `${resource} not found` });
    await log(req, 'updated', resource, item._id);
    res.json(item);
  },
  remove: async (req, res) => {
    const item = await Model.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: `${resource} not found` });
    await log(req, 'deleted', resource, req.params.id);
    res.status(204).send();
  },
});

function buildFilter(Model, query) {
  const filter = {};
  for (const key of ['status', 'category', 'isRead', 'isVisible', 'isActive']) {
    if (query[key] !== undefined && query[key] !== 'all') filter[key] = query[key];
  }
  if (query.search) {
    const regex = new RegExp(query.search, 'i');
    const stringPaths = Object.entries(Model.schema.paths).filter(([, path]) => path.instance === 'String').map(([key]) => key);
    if (stringPaths.length) filter.$or = stringPaths.map((key) => ({ [key]: regex }));
  }
  return filter;
}

function withUploadedImage(body, file, resource) {
  const payload = { ...body };
  if (!file) return payload;
  const image = { url: file.path, publicId: file.filename };
  if (resource === 'blog') payload.featuredImage = image;
  else if (resource === 'testimonial') payload.clientPhoto = image;
  else payload.image = image;
  return payload;
}

async function log(req, action, resource, resourceId) {
  await Activity.create({ action, resource, resourceId: String(resourceId), actor: req.user?._id });
}
