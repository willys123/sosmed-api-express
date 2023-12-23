import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY!;
// tanda seru untuk jaga jaga kalau data kosong
interface PayloadToken {
  id: number;
}
export const createToken = (data: PayloadToken) => {
  const expiresIn = "1h";
  return jwt.sign(data, secretKey, { expiresIn });
};
