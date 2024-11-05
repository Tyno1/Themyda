import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

global.mongoose = {
  conn: null,
  promise: null,
};

export async function dbConnect() {
  if (global.mongoose && global.mongoose.conn) {
    console.log("connected from previous");
    return global.mongoose.conn;
  } else {
    const promise = mongoose.connect(URI, { autoIndex: true });
    global.mongoose = {
      conn: await promise,
      promise,
    };
    console.log("Newly connected");
    return await promise;
  }
}
