import Service from "./service";

class Auth extends Service {
  get prefix() {
    return "/api/v1/users";
  }

  login({ username, password }) {
    return this.http("/login", {
      method: "POST",
      body: {
        username,
        password,
      },
    });
  }
}

export default Auth;
