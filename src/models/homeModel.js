import mongoose from "mongoose";

const homeModel = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: mongoose.Schema.Types.String },
    description: { type: mongoose.Schema.Types.String },
  },
  { versionKey: false }
);

const Home = mongoose.model("Home", homeModel);

export default Home;
