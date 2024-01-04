import { prisma } from "../../helper/prisma";

export const getUserTweetRepo = async (userId: number) => {
  try {
    const tweets = await prisma.tweets.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: true,
      },
      orderBy: {
        id: "desc",
      },
    });
    return tweets;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
