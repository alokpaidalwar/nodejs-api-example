import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../config.js';

// Verify token
export const verifyToken = (req, res, next) => {
  const { token } = req.headers;
  // Return forbidden status if the token is not available
  if (!token) {
    return res
      .status(403)
      .json({ authorized: false, error: 'Token is required.' });
  }
  // Verify token
  return jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({
          authorized: false,
          error: 'Verification failed or token has expired.',
        });
    }
    // No error so save decoded token into req.user and go to next process.
    req.user = decoded;
    next();
    return false;
  });
};

// Verify admin role token
export const verifyAdminToken = (req, res, next) => {
  const { token } = req.headers;
  // Return forbidden status if the token is not available
  if (!token) {
    return res
      .status(403)
      .json({ authorized: false, error: 'Token is required.' });
  }
  // Verify token
  return jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({
          authorized: false,
          error: 'Verification failed or token has expired.',
        });
    }
    // No error so save decoded token into req.user and go to next process.
    req.user = decoded;
    // Check if user has admin role
    if (req.user.role !== 'admin') {
      return res
        .status(401)
        .json({
          authorized: false,
          error: 'Admin role permission needed to perform this action.',
        });
    }
    next();
    return false;
  });
};
