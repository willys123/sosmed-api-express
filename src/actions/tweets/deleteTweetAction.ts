import { deleteTweetRepo } from "../../repositories/tweets/deleteTweetRepo";

export const deleteTweetAction = async (idTweet: number) => {
  try {
    const users = await deleteTweetRepo(idTweet);

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
