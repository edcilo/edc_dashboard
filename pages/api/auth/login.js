import { serialize } from "cookie";
import config from "../../../config";
import Auth from "../../../services/auth";

export default async function handler(req, res) {
  const auth = new Auth();
  const { username, password } = req.body;

  try {
    const response = await auth.login({ username, password });

    const serialized = serialize("edc-auth-token", response.data.token, {
      httpOnly: true,
      secure: config.env === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
      path: "/",
    });

    return res
      .setHeader("Set-Cookie", serialized)
      .status(200)
      .json(response.data);
  } catch (error) {
    return res.status(400).json(error.data);
  }
}
