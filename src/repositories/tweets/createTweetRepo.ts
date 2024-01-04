import { prisma } from "../../helper/prisma";
import { Itweet } from "../../types/tweet.type";

export const createTweetRepo = async (data: Itweet) => {
  try {
    const { userId, tweet } = data;
    const user = await prisma.tweets.create({
      data: { userId, tweet },
    });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
