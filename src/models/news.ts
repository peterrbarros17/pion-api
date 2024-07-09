import { Schema, model, Document } from "mongoose";

interface NewsInterface extends Document {
  title: string;
  description: string;
  slug: string;
}

const newsSchema = new Schema(
  {
    title: { type: Schema.Types.String, require: true },
    description: { type: Schema.Types.String, require: true },
    slug: { type: Schema.Types.String, require: true },
  },
  { versionKey: false }
);

const News = model<NewsInterface>("News", newsSchema);

export default News;
