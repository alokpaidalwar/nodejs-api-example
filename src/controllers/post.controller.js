import { body, validationResult } from 'express-validator';

import Post from '../models/Post.js';

export const readAll = async (req, res) => {
  // Paginate Post by page & perPage Paramter
  const { page, perPage } = req.query;
  const post = await Post.paginate(
    {},
    { page: parseInt(page, 10), perPage: parseInt(perPage, 10) },
  );
  return res.status(200).json({ post });
};

export const read = async (req, res) => {
  try {
    // Find the post by id
    const { id } = req.params;
    const data = await Post.findById(id);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const create = [
  // Validate input fields. title can be max 255 characters
  body('title', 'Title can be max 255 characters.').isLength({ max: 255 }),
  async (req, res) => {
    try {
      // Save errors from validation, if any.
      const errors = validationResult(req);

      // Check if there were errors from the form.
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { title } = req.body;

      const post = await Post.create({ title });
      return res.status(200).json(post);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },
];

export const update = async (req, res) => {
  try {
    // Update the post by id
    const { title } = req.body;
    const { id } = req.params;

    const post = await Post.findByIdAndUpdate(id, { title }, { new: true });
    return res.status(200).json(post);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    // Delete the post by id
    const { id } = req.params;

    await Post.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Post successfully deleted' });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
