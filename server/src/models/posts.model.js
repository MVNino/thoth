import mongoose, { Mongoose } from "mongoose";

const Scheme = mongoose.Schema;

const postSchema = new Scheme(
  {
    title: {
      type: String,
      required: true,
    },
    descriptiom: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model('Post', postSchema)
