import { connect } from "mongoose";

export async function startConnection() {
  await connect("mongodb://localhost/ts-images-db", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  });
  console.log("DB connected");
}
