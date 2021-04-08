import express from "express";

const PORT = 4400;

const app = express();

const handleHome = (req, res) => {
  return res.end();
};

const handleLogin = (req, res) => {
  return res.send("Hello! login");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`🐾Server listening on port http://localhost:${PORT} 🎈`);

app.listen(PORT, handleListening);
