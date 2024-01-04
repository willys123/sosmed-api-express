import { prisma } from "../../helper/prisma";
import { Itweet } from "../../types/tweet.type";

export const editTweetRepo = async (idTweet: number, data: Itweet) => {
  try {
    const { userId, tweet } = data;
    const user = await prisma.tweets.update({
      where: {
        id: idTweet,
      },
      data: { userId, tweet },
    });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
