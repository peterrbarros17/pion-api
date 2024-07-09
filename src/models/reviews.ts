import { Schema, model, Document } from "mongoose";

interface ReviewsInterface extends Document {
  title: string;
  description: string;
  alt: string;
  url: string;
  textButton: string;
  slug: string;
}

const reviewsSchema = new Schema(
  {
    alt: { type: Schema.Types.String, require: true },
    url: { type: Schema.Types.String, require: true },
    title: { type: Schema.Types.String, require: true },
    description: { type: Schema.Types.String, require: true },
    textButton: { type: Schema.Types.String, require: true },
    slug: { type: Schema.Types.String, require: true },
  },
  { versionKey: false }
);

const Reviews = model<ReviewsInterface>("Reviews", reviewsSchema);

export default Reviews;
