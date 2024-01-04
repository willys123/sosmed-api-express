import { prisma } from "../../helper/prisma";

export const deleteTweetRepo = async (idTweet: number) => {
  try {
    const user = await prisma.tweets.delete({
      where: {
        id: idTweet,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
