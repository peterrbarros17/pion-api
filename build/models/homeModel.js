import { Schema, model } from "mongoose";
const homeModel = new Schema({
    id: { type: Schema.Types.ObjectId, require: true, unique: true },
    title: { type: Schema.Types.String, require: true, unique: true },
    description: { type: Schema.Types.String, require: true, unique: true },
}, { versionKey: false });
const Home = model("Home", homeModel);
export default Home;
