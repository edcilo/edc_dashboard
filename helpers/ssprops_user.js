import { validate } from "./jwt";
import Account from "../services/account";

export default async function ssprops_user({ req }) {
  const { cookies } = req;
  const token = cookies["edc-auth-token"];
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
