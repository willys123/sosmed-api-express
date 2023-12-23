// LOGIC
// pertama check dulu apakah variabel usernameOrEmail itu adalah email atau bukan
// kalau email cari data email tsb didatabase
// kalau username cari data username tsb di database
// kalau misalnya datanya ga ada ? berarti langsung return "account not found"
// kalau datanya ada baru kita cek password yang ada didatabase dengan password yang dimasukkan oleh user (req.body)
// kalau misalnya password ga sama, maka return salah password
// kalau password nya sama, maka return success beserta data usernya

import { comparePasswords } from "../../helper/bcrypt";
import { excludeFields } from "../../helper/excludeFields";
import { createToken } from "../../helper/jwt";
import { findUserByEmail } from "../../repositories/users/findUserByEmail";
import { findUserByUsername } from "../../repositories/users/findUserByUsername";

export const loginUserAction = async (
  usernameOrEmail: string,
  password: string
) => {
  try {
    let user;

    if (usernameOrEmail.includes("@")) {
      // find user by email
      user = await findUserByEmail(usernameOrEmail);
    } else {
      // find user by username
      user = await findUserByUsername(usernameOrEmail);
    }

    if (!user) {
      return {
        status: 404,
        message: "Account not found",
      };
    }

    if (user.isDeleted) {
      return {
        status: 400,
        message: "Account deleted",
      };
    }

    const isPasswordValid = await comparePasswords(password, user.password);

    if (!isPasswordValid) {
      return {
        status: 400,
        message: "Invalid credentials",
      };
    }

    const dataWithoutPassword = excludeFields(user, ["password"]);

    const token = createToken({ id: user.id });

    return {
      status: 200,
      message: "Login success",
      data: dataWithoutPassword,
      token,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
