// LOGIC
// cari email / username didatabase
// kalau ada langsung return email / username telah digunakan
// kalau tidak ada yang menggunakan email/username tsb create ke database

import { hashPassword } from "../../helper/bcrypt";
import { createUser } from "../../repositories/users/createUser";
import { findUsersByEmailAndUsername } from "../../repositories/users/findUsersByEmailAndUsername";
import { Iuser } from "../../types/user.type";

export const registerUserAction = async (data: Iuser) => {
  try {
    const { email, username, password } = data;
    const users = await findUsersByEmailAndUsername(email, username);

    if (users.length) {
      return {
        status: 400,
        message: "Email or Username already exist",
      };
    }

    const hashedPassword = await hashPassword(password);
    data.password = hashedPassword;
    //create users di database
    await createUser(data);

    return {
      status: 200,
      message: "Register new user success",
    };

    console.log(users);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
