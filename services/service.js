class Service {
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_HOST;
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
    }).then((response) =>
      response.json().then((data) => ({
        data: data,
        status: response.status,
      }))
    );
  }
}

export default Service;
