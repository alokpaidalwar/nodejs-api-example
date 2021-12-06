import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema(
  {
    profileId: { type: Schema.Types.ObjectId, ref: 'Profile' },
    dateRecorded: Date,
    cryptocurrency: String,
    euros: Number,
    price: Number,
    quantity: Number,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Simulator', schema);
