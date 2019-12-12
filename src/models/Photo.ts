import { Schema, model, Document } from "mongoose";

// Using mongoose module
const schema = new Schema({
  title: String,
  description: String,
  imagePath: String
});

// Using TS
interface IPhoto extends Document {
  title: string;
  description: string;
  imagePath: string;
}

export default model<IPhoto>("Photo", schema);
