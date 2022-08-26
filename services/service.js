import config from "../config";

class Service {
  constructor() {
    this.baseUrl = config.api_url;
  }

  get prefix() {
    return "";
  }

  http(endpoint, { body, headers, ...params }) {
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
