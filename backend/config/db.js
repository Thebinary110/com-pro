import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose
      .connect(
        "mongodb+srv://blazeopgamingyt:yXzV250vyGDfSrKw@cluster0.6ppwv.mongodb.net/chat-app"
      )
      .then(() => console.log("db CONNECTED"));
}