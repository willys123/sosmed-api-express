import { NextFunction, Request, Response } from "express";
import { deleteTweetAction } from "../../actions/tweets/deleteTweetAction";

export const deleteTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = parseInt(req.params.id, 10);

    const result = await deleteTweetAction(data);
    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
