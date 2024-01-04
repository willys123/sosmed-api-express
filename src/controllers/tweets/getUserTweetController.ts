import { NextFunction, Request, Response } from "express";
import { getUserTweetAction } from "../../actions/tweets/getUserTweetAction";

export const getUserTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = parseInt(req.params.id, 10);
  try {
    const result = await getUserTweetAction(userId);
    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
