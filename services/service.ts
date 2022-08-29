import config from "../config";

class Service {
  constructor(token = null) {
    this.baseUrl = config.api_url;
    this.token = token;
  }

  get prefix() {
    return "";
  }

  async http(endpoint, { body, headers, ...params }) {
    headers = {
      Authorization: this.token ?? `Bearer ${this.token}`,
      ...headers,
    };
    return fetch(this.baseUrl + this.prefix + endpoint, {
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        ...headers,
      },
      ...params,
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((data) => {
          throw {
            status: response.status,
            statusText: response.statusText,
            data,
          };
        });
      }

      if (response.status == 204) {
        return response;
      } else {
        return response.json().then((data) => ({
          data: data,
          status: response.status,
        }));
      }
    });
  }
}

export default Service;
