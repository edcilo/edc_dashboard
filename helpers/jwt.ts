import * as jose from "jose";
import appConfig from "@/config";

const validate = async (token: string): Promise<null | jose.JWTPayload> => {
  if (!token) {
    return null;
  }

  try {
    const { payload } = await jose.jwtVerify(
      token,
      new TextEncoder().encode(appConfig.secret)
    );

    const now = new Date();

    if (now.getTime() > payload.exp * 1000) {
      return null;
    }

    return payload;
  } catch (error) {
    return null;
  }
};

export { validate };
