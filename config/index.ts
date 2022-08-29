interface IConfig {
  env: string;
  secret: string;
  api_url: string;
  auth_token_name: string;
}

const config: IConfig = {
  env: process.env.NODE_ENV || "development",
  secret: process.env.APP_SECRET_KEY,
  api_url: process.env.NEXT_PUBLIC_API_HOST || "http://localhost",
  auth_token_name: "edc-auth-token",
};

export default config;
