import { Schema, model, Document } from "mongoose";

interface NewsInterface extends Document {
  title: string;
  description: string;
  slug: string;
}

const newsSchema = new Schema(
  {
    title: { type: Schema.Types.String, required: [true, "title is required"] },
    description: {
      type: Schema.Types.String,
      required: [true, "description is required"],
    },
    slug: { type: Schema.Types.String, required: [true, "slug is required"] },
  },
  { versionKey: false }
);

const News = model<NewsInterface>("News", newsSchema);

export default News;
