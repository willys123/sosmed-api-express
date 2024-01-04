import { NextFunction, Request, Response } from "express";
import { getWhoToFollowAction } from "../../actions/users/getWhoToFollowAction";

export const getWhoToFollowController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getWhoToFollowAction();
    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
