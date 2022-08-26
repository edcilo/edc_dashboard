import { NextResponse } from "next/server";
import { validate } from "./helpers/jwt";

export async function middleware(req) {
  const { cookies, url } = req;

  const token = cookies.get("edc-auth-token");
  const payload = await validate(token);

  if (url == new URL("/", url) && payload !== null) {
    return NextResponse.redirect(new URL("/dashboard", url));
  }

  if (url.includes("/dashboard") && payload === null) {
    return NextResponse.redirect(new URL("/", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
