import { Schema, model, Document } from "mongoose";

interface HomeCardInterface extends Document {
  title: string;
  description: string;
  alt: string;
  url: string;
  textButton: string;
  slug: string;
}

const homeCardSchema = new Schema(
  {
    alt: { type: Schema.Types.String, required: [true, "alt is required"] },
    url: { type: Schema.Types.String, required: [true, "url is required"] },
    title: { type: Schema.Types.String, required: [true, "title is required"] },
    description: {
      type: Schema.Types.String,
      required: [true, "description is required"],
    },
    textButton: {
      type: Schema.Types.String,
      required: [true, "textButton is required"],
    },
    slug: { type: Schema.Types.String, required: [true, "slug is required"] },
  },
  { versionKey: false }
);

const HomeCard = model<HomeCardInterface>("HomeCard", homeCardSchema);

export default HomeCard;
