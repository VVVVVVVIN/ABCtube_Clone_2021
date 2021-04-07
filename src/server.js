import express from "express";

const PORT = 4400;

const app = express();

const handleHome = () => console.log("Somebody is trying to go home.");

app.get("/", handleHome);

const handleListening = () =>
  console.log(`🐾Server listening on port http://localhost:${PORT} 🎈`);

app.listen(PORT, handleListening);
