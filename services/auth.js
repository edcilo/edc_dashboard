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

class ApiAuth extends Service {
  constructor() {
    super();
    this.baseUrl = "";
  }

  get prefix() {
    return "/api/auth";
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

  logout() {
    return this.http("/logout", {
      method: "POST",
    });
  }
}

export { Auth, ApiAuth };
export default Auth;
