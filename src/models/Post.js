import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-async-await';

const { Schema } = mongoose;

const schema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 255,
    },
  },
  {
    timestamps: true,
  },
);

schema.plugin(mongoosePaginate);

export default mongoose.model('Post', schema);
