import { editTweetRepo } from "../../repositories/tweets/editTweetRepo";
import { Itweet } from "../../types/tweet.type";

export const editTweetAction = async (idTweet: number, data: Itweet) => {
  try {
    const users = await editTweetRepo(idTweet, data);

    return {
      status: 200,
      message: "edit tweet success",
      data: users,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
