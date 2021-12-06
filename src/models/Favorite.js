import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema(
  {
    profileId: { type: Schema.Types.ObjectId, ref: 'Profile' },
    name: String,
    favorite1: String,
    favorite2: String,
    favorite3: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Favorite', schema);
