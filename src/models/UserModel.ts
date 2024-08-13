import { Document, model, Schema } from "mongoose";

interface UserInterface extends Document {
  username: string;
  password: string;
}

const UserSchema = new Schema(
  {
    username: {
      type: Schema.Types.String,
      required: [true, "username is required"],
      unique: true,
    },
    password: {
      type: Schema.Types.String,
      required: [true, "username is required"],
    },
  },
  { versionKey: false }
);

const User = model<UserInterface>("User", UserSchema);

export default User;
