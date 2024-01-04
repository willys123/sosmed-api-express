import express from "express";
import { createTweetController } from "../controllers/tweets/createTweetController";
import { deleteTweetController } from "../controllers/tweets/deleteTweetController";
import { editTweetController } from "../controllers/tweets/editTweetController";
import { getTweetsController } from "../controllers/tweets/getTweetsController";
import { keepLoginController } from "../controllers/users/keepLoginController";
import { loginUserController } from "../controllers/users/loginUserController";
import { registerUserController } from "../controllers/users/registerUserController";
import { verifyToken } from "../middleware/jwtVerifyToken";
import { getUserTweetController } from "../controllers/tweets/getUserTweetController";

const router = express.Router();

router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.get("/keeplogin", verifyToken, keepLoginController);
router.post("/", createTweetController);
router.get("/tweets", getTweetsController);
router.delete("/tweets/:id", deleteTweetController);
router.patch("/tweets/:id", editTweetController);
router.get("/tweets/:id", getUserTweetController);

export default router;
