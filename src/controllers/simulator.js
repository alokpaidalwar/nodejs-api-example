import Profile from '../models/Profile.js';
import Simulator from '../models/Simulator.js';

export const read = async (req, res) => {
  const simulator = await Simulator.find().lean();
  res.json({ simulator });
};

export const readByProfileId = async (req, res) => {
  try {
    const { profileId } = req.params;
    const data = await Simulator.find({ profileId });
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

    const simulator = await Simulator.create(newData);
    return res.json(simulator);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
