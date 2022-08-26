import { serialize } from "cookie";
import config from "../../../config";

export default async function handler(req, res) {
  const { cookies } = req;

  const serialized = serialize("edc-auth-token", "", {
    httpOnly: true,
    secure: config.env === "production",
    sameSite: "strict",
    maxAge: -1,
    path: "/",
  });

  return res.setHeader("Set-Cookie", serialized).status(204).json();
}
