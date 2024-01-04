import { getTweetsRepo } from "../../repositories/tweets/getTweetsRepo";

export const getTweetAction = async () => {
  try {
    const users = await getTweetsRepo();

    return {
      status: 200,
      message: "get tweets success",
      data: users,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
