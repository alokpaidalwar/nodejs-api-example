import mongoose from 'mongoose';

import { DBURL } from '../config';
import Favorite from '../models/Favorite';
import Profile from '../models/Profile';
import Simulator from '../models/Simulator';

(async () => {
  mongoose.connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  const profile = new Profile({
    name: `String`,
    email: `String`,
    capital: `123`,
    divisa: `String`,
    prefered_cryptocurrency: `String`,
  });
  await profile.save();

  const query = { _id: profile._id };
  const idProfile = await Profile.findOne(query).then((e) =>
    e ? e._id : null,
  );

  const simulator = new Simulator({
    profileId: idProfile,
    dateRecorded: `01/05/2021`,
    cryptocurrency: `String`,
    euros: 123,
    price: 124,
    quantity: 125,
  });
  await simulator.save();

  const favorite = new Favorite({
    profileId: idProfile,
    name: `String`,
    favorite1: `String`,
    favorite2: `String`,
    favorite3: `String`,
  });
  await favorite.save();

  mongoose.disconnect();
})();
