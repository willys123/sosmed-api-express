import { createTweetRepo } from "../../repositories/tweets/createTweetRepo";
import { Itweet } from "../../types/tweet.type";

export const createTweetAction = async (data: Itweet) => {
  try {
    const users = await createTweetRepo(data);

    return {
      status: 200,
      message: "Create tweet success",
      data: users,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
