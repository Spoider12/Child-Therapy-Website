import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { asyncHandler } from './errorHandler.js';

export const protect = asyncHandler(async (req, res, next) => {
  const header = req.headers.authorization || '';
  const bearerToken = header.startsWith('Bearer ') ? header.slice(7) : null;
  const token = req.cookies?.adminToken || bearerToken;
  if (!token) return res.status(401).json({ message: 'Authentication token required' });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id).select('-password');
  if (!user || !user.isActive) return res.status(401).json({ message: 'Invalid session' });
  req.user = user;
  next();
});

export const requireAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') return res.status(403).json({ message: 'Admin access only' });
  next();
};
