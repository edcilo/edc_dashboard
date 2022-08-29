import type { NextApiRequest } from "next";
import config from "@/config";
import { IUser } from "@/interfaces";
import Account from "@/services/account";
import { validate } from "./jwt";

interface SSPropsParams {
  req: NextApiRequest;
}

interface SSProps {
  user: IUser;
  token: string;
}

export default async function ssprops_user({
  req,
}: SSPropsParams): Promise<SSProps> {
  const { cookies } = req;
  const token = cookies[config.auth_token_name];
  const payload = await validate(token);

  let user = null;

  try {
    const userService = new Account(token);
    const { data } = await userService.profile(payload.id);
    user = data;
  } catch (error) {
    console.log(error);
  }

  return { user, token };
}
