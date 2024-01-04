import { prisma } from "../../helper/prisma";

export const getWhoToFollowRepo = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
