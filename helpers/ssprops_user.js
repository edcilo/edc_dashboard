import { validate } from "./jwt";
import User from "../services/user";

export default async function ssprops_user({ req }) {
  const { cookies } = req;
  const token = cookies["edc-auth-token"];
  const payload = await validate(token);

  let user = null;

  try {
    const userService = new User(token);
    const { data } = await userService.profile(payload.id);
    user = data;
  } catch (error) {
    console.log(error);
  }

  return user;
}
