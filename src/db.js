import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("ð¾ Connected to DB ð°");
const handleError = (error) => console.log("ð¢DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
