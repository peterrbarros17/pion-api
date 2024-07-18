import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (value: string) => value !== "",
  message: ({ path }: any) => `The field ${path} was supplied in white`,
});
