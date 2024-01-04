import { NextFunction, Request, Response } from "express";
import { editTweetAction } from "../../actions/tweets/editTweetAction";

export const editTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tweetId = parseInt(req.params.id, 10);
    const data = req.body;
    const result = await editTweetAction(tweetId, data);
    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
