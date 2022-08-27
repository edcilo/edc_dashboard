import Service from "./service";

class Account extends Service {
  get prefix() {
    return "/api/v1/users/admin";
  }

  all(params) {
    const url = "?" + new URLSearchParams(params);
    return this.http(url, {
      method: "GET",
    });
  }

  archived() {
    return this.http("/trash", {
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

  updatePassword(id, data) {
    return this.http(`/${id}/password`, {
      method: "PUT",
      body: data,
    });
  }

  permissions(id) {
    return this.http(`/${id}/permissions`, {
      method: "GET",
    });
  }

  syncPermissions(id, data) {
    return this.http(`/${id}/sync-permissions`, {
      method: "POST",
      body: data,
    });
  }

  syncRoles(id, data) {
    return this.http(`/${id}/sync-roles`, {
      method: "POST",
      body: data,
    });
  }

  activate(id) {
    return this.http(`/${id}/activate`, {
      method: "POST",
    });
  }

  deactivate(id) {
    return this.http(`/${id}/activate`, {
      method: "DELETE",
    });
  }

  delete(id) {
    return this.http(`/${id}`, {
      method: "DELETE",
    });
  }

  restore(id) {
    return this.http(`/${id}/restore`, {
      method: "POST",
    });
  }

  hardDelete(id) {
    return this.http(`/${id}/hard`, {
      method: "DELETE",
    });
  }
}

export default Account;
