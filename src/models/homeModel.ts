import { Schema, model, Document } from "mongoose";

interface HomeModelInterface extends Document {
  title: string;
  description: string;
  alt: string;
  url: string;
  textButton: string;
  slug: string;
}

const homeModel = new Schema(
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

const Home = model<HomeModelInterface>("Home", homeModel);

export default Home;
