import { Schema, model, Document } from "mongoose";

interface HomeCardInterface extends Document {
  alt: string;
  url: string;
  title: string;
  description: string;
  slug: string;
}

const ContentSchema = new Schema({
  type: {
    type: String,
    required: [true, "type is required of content schema"],
  },
  text: {
    type: String,
    required: [true, "text is required of content schema"],
  },
  alt: { type: String, required: [true, "alt is required of content schema"] },
  src: { type: String, required: [true, "src is required of content schema"] },
});

const homeCardSchema = new Schema(
  {
    alt: { type: Schema.Types.String, required: [true, "alt is required"] },
    url: { type: Schema.Types.String, required: [true, "url is required"] },
    title: { type: Schema.Types.String, required: [true, "title is required"] },
    description: {
      type: Schema.Types.String,
      required: [true, "description is required"],
    },
    slug: { type: Schema.Types.String, required: [true, "slug is required"] },
    content: [ContentSchema],
  },
  { versionKey: false, timestamps: true }
);

const HomeCard = model<HomeCardInterface>("HomeCard", homeCardSchema);

export default HomeCard;
