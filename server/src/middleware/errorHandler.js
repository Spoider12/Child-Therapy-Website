export const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

export function errorHandler(err, req, res, next) {
  const status = err.statusCode || 500;
  res.status(status).json({ message: err.message || 'Server error' });
}
