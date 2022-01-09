import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../config.js';

const login = [
  // Validate input fields. Trim spaces around username
  body('username', 'Username required.').isLength({ min: 3 }).trim(),
  body('password', 'Password must atleast 6 characters.').isLength({ min: 6 }),
  (req, res) => {
    try {
      // Save errors from validation, if any.
      const errors = validationResult(req);

      // Check if there were errors from the form.
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { username } = req.body;
      const role = username === 'admin' ? 'admin' : 'student';

      // Create a token for the user.
      const token = jwt.sign({ username, role }, JWT_SECRET, {
        expiresIn: 21600,
      });
      // Set token in header
      req.headers.token = token;
      return res.status(200).json({ username, token, role });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
];

export default login;
