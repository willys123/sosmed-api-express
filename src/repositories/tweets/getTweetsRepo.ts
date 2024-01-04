import { prisma } from "../../helper/prisma";

export const getTweetsRepo = async () => {
  try {
    const tweets = await prisma.tweets.findMany({
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
