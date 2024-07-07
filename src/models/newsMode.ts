import { Schema, model, Document } from "mongoose";

interface NewPostModalInterface extends Document {
  title: string;
  description: string;
  slug: string;
}

const newPostModal = new Schema(
  {
    title: { type: Schema.Types.String, require: true },
    description: { type: Schema.Types.String, require: true },
    slug: { type: Schema.Types.String, require: true },
  },
  { versionKey: false }
);

const NewPost = model<NewPostModalInterface>("NewPost", newPostModal);

export default NewPost;
