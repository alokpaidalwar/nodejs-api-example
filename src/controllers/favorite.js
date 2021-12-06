import Favorite from '../models/Favorite.js';
import Profile from '../models/Profile.js';

export const read = async (req, res) => {
  const favorite = await Favorite.find().lean();
  return res.json({ favorite });
};

export const readByProfileId = async (req, res) => {
  try {
    const { profileId } = req.params;
    const data = await Favorite.find({ profileId });
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const createByProfileId = async (req, res) => {
  try {
    const { profileId } = req.params;

    const profile = await Profile.findById(profileId);
    if (!profile) {
      return res.status(422).json({
        error: 'Profile not found',
      });
    }

    const newData = {
      ...req.body,
      profileId,
    };

    const favorite = await Favorite.create(newData);
    return res.json(favorite);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
