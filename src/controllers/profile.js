import Profile from '../models/Profile.js';

export const read = async (req, res) => {
  const profile = await Profile.find().lean();
  return res.json({ profile });
};

export const readById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Profile.findById(id);
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const { nickname, email } = req.body;
    let profile = await Profile.findOne({
      $or: [
        { email },
        { $and: [{ nickname: { $exists: true, $ne: null } }, { nickname }] },
      ],
    }).exec();

    if (!profile) {
      profile = await Profile.create({ ...req.body });
      return res.json(profile);
    }
    return res.status(422).json({
      error: 'Profile with given email or nickname already exists.',
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
