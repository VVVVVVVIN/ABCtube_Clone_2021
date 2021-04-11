import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home🥇");

globalRouter.get("/", handleHome);

export default globalRouter;
