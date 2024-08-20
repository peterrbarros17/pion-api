import { Schema, model, Document } from "mongoose";

interface ReviewsInterface extends Document {
  alt: string;
  url: string;
  title: string;
  description: string;
  slug: string;
}
const ContentSchema = new Schema({
  type: { type: String, required: [true, "type is required"] },
  text: { type: String, required: [true, "text is required"] },
  alt: { type: String, required: [true, "alt is required"] },
  src: { type: String, required: [true, "src is required"] },
});

const reviewsSchema = new Schema(
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

const Reviews = model<ReviewsInterface>("Reviews", reviewsSchema);

export default Reviews;
