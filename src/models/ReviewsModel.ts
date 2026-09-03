import { Schema, model, Document } from "mongoose";

interface ContentBlock {
  type: string;
  text: string;
  alt: string;
  src: string;
}

interface GameMeta {
  genre?: string;
  developer?: string;
  publisher?: string;
  releaseDate?: string;
  platforms?: string;
  price?: string;
}

interface ReviewScores {
  overall?: number;
  story?: number;
  gameplay?: number;
  visual?: number;
  length?: number;
  pricepoint?: number;
}

interface ReviewSection {
  id: string;
  title: string;
  body: string;
  score?: number;
}

interface ReviewsInterface extends Document {
  alt: string;
  url: string;
  title: string;
  description: string;
  slug: string;
  content: ContentBlock[];
  /** legacy = paragraph/image blocks only; structured = Fextralife-style sections + scores */
  format?: "legacy" | "structured";
  gameMeta?: GameMeta;
  scores?: ReviewScores;
  sections?: ReviewSection[];
  summary?: string;
  /** Optional link back to the stream(s) that produced this review */
  sourceStreamIds?: string[];
}

const ContentSchema = new Schema({
  type: { type: String, required: [true, "type is required"] },
  text: { type: String, required: [true, "text is required"] },
  alt: { type: String, required: [true, "alt is required"] },
  src: { type: String, required: [true, "src is required"] },
});

const GameMetaSchema = new Schema(
  {
    genre: { type: String },
    developer: { type: String },
    publisher: { type: String },
    releaseDate: { type: String },
    platforms: { type: String },
    price: { type: String },
  },
  { _id: false }
);

const ScoresSchema = new Schema(
  {
    overall: { type: Number },
    story: { type: Number },
    gameplay: { type: Number },
    visual: { type: Number },
    length: { type: Number },
    pricepoint: { type: Number },
  },
  { _id: false }
);

const SectionSchema = new Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    score: { type: Number },
  },
  { _id: false }
);

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
    format: {
      type: Schema.Types.String,
      enum: ["legacy", "structured"],
      default: "legacy",
    },
    gameMeta: { type: GameMetaSchema },
    scores: { type: ScoresSchema },
    sections: [SectionSchema],
    summary: { type: Schema.Types.String },
    sourceStreamIds: [{ type: Schema.Types.String }],
  },
  { versionKey: false, timestamps: true }
);

const Reviews = model<ReviewsInterface>("Reviews", reviewsSchema);

export default Reviews;
