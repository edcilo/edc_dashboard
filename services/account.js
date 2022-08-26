import Service from "./service";

class Account extends Service {
  get prefix() {
    return "/api/v1/users/profile";
  }

  profile() {
    return this.http("", {
      method: "GET",
    });
  }

  updateAuth({ email, phone }) {
    return this.http("/auth", {
      method: "PUT",
      body: {
        email,
        phone,
      },
    });
  }

  updateAccount({ name, lastname, second_lastname }) {
    return this.http("/account", {
      method: "PUT",
      body: {
        name,
        lastname,
        second_lastname,
      },
    });
  }

  updatePassword({ current_password, password, password_confirmation }) {
    return this.http("/update-password", {
      method: "POST",
      body: {
        current_password,
        password,
        password_confirmation,
      },
    });
  }
}

export default Account;
