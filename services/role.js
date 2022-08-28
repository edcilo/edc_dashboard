import Service from "./service";

class Role extends Service {
  get prefix() {
    return "/api/v1/users/admin/role";
  }

  paginate(params) {
    const url = "?" + new URLSearchParams(params);
    return this.http(url, {
      method: "GET",
    });
  }

  list() {
    return this.http("/list", {
      method: "GET",
    });
  }

  create(data) {
    return this.http("", {
      method: "POST",
      body: data,
    });
  }

  detail(id) {
    return this.http(`/${id}`, {
      method: "GET",
    });
  }

  update(id, data) {
    return this.http(`/${id}`, {
      method: "PUT",
      body: data,
    });
  }

  syncPermissions(id, data) {
    return this.http(`/${id}/sync-permissions`, {
      method: "POST",
      body: data,
    });
  }

  delete(id) {
    return this.http(`/${id}`, {
      method: "DELETE",
    });
  }
}

export default Role;
