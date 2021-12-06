import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema(
  {
    name: String,
    nickname: String,
    email: { type: String, unique: true, required: true, index: true },
    capital: Number,
    divisa: String,
    prefered_cryptocurrency: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Profile', schema);
