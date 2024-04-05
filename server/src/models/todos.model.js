import mongoose from "mongoose";

const Schema = mongoose.Schema;

const todosSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: false,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Todo || mongoose.model("Todo", todosSchema);
