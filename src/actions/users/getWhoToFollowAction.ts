import { getWhoToFollowRepo } from "../../repositories/users/getWhoToFollow";

export const getWhoToFollowAction = async () => {
  try {
    const users = await getWhoToFollowRepo();

    return {
      status: 200,
      message: "get users success",
      data: users,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
