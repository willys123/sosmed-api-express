export interface Iuser {
  // samain dengan yang di schema.prisma
  id: number;
  email: string;
  username: string;
  password: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
