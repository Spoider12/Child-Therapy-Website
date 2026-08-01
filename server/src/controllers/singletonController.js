export const upsertSingleton = (Model) => async (req, res) => {
  const payload = { ...req.body };
  if (req.file) payload.logo = payload.image = { url: req.file.path, publicId: req.file.filename };
  const item = await Model.findOneAndUpdate({}, payload, { new: true, upsert: true, runValidators: true });
  res.json(item);
};
export const getSingleton = (Model) => async (req, res) => {
  const item = await Model.findOne({});
  res.json(item || {});
};
