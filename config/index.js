const config = {
  env: process.env.NODE_ENV || "development",
  secret: process.env.APP_SECRET_KEY,
  api_url: process.env.NEXT_PUBLIC_API_HOST || "http://localhost",
};

export default config;
