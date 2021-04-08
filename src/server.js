import express from "express";
import morgan from "morgan";

const PORT = 4400;

const app = express();
const logger = morgan("dev");

const home = (req, res) => {
  console.log("Home🎶");
  return res.send("hello");
};

const login = (req, res) => {
  console.log("login⚽");
  return res.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`🐾Server listening on port http://localhost:${PORT} 🎈`);

app.listen(PORT, handleListening);
