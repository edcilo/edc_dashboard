import Service from "./service";

class User extends Service {
  get prefix() {
    return "/api/v1/users";
  }

  profile(id) {
    return this.http("/profile", {
      method: "GET",
    });
  }
}

export default User;
