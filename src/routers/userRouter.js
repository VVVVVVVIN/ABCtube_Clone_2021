import express from "express";
import {
  getEdit,
  postEdit,
  logout,
  see,
  startGithubLogin,
  finishGithubLogin,
} from "../controllers/userController";
import { protectorMiddleware, publickOnlyMiddleware } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
userRouter.get("/github/start", publickOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publickOnlyMiddleware, finishGithubLogin);
userRouter.get("/:id", see);

export default userRouter;
