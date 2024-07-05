import { Schema, model, Document, Types } from "mongoose";

interface HomeModelInterface extends Document {
  id: Types.ObjectId;
  title: string;
  description: string;
}

const homeModel = new Schema(
  {
    id: { type: Schema.Types.ObjectId, require: true, unique: true },
    title: { type: Schema.Types.String, require: true, unique: true },
    description: { type: Schema.Types.String, require: true, unique: true },
  },
  { versionKey: false }
);

const Home = model<HomeModelInterface>("Home", homeModel);

export default Home;
