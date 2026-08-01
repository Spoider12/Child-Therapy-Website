import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { asyncHandler } from '../middleware/errorHandler.js';

const signToken = (user) => jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
const cookieName = 'adminToken';

const cookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

const serializeUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  role: user.role,
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) return res.status(401).json({ message: 'Invalid email or password' });
  if (user.role !== 'admin') return res.status(403).json({ message: 'Admin access only' });
  const token = signToken(user);
  res.cookie(cookieName, token, cookieOptions());
  res.json({ user: serializeUser(user) });
});

export const logout = asyncHandler(async (req, res) => {
  res.clearCookie(cookieName, cookieOptions());
  res.status(204).send();
});

export const me = asyncHandler(async (req, res) => {
  res.json({ user: serializeUser(req.user) });
});