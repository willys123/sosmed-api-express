import { getUserTweetRepo } from "../../repositories/tweets/getUserTweetRepo";

export const getUserTweetAction = async (userId: number) => {
  try {
    const getUserTweet = await getUserTweetRepo(userId);

    return {
      status: 200,
      message: "get tweets success",
      data: getUserTweet,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
