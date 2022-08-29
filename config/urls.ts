type OneOrMore<T> = { 0: T } & Array<T>;

type UrlFnc = (...args: OneOrMore<unknown>) => string;

interface IUrls {
  settings: string;
  password: string;
  user: {
    detail: UrlFnc;
    update: UrlFnc;
    delete: UrlFnc;
  };
}

const urls: IUrls = {
  settings: "/dashboard/profile/account",
  password: "/dashboard/profile/password",
  user: {
    detail: (id: string) => `/dashboard/users/${id}`,
    update: (id: string) => `/dashboard/users/${id}/edit`,
    delete: (id: string) => `/dashboard/users/${id}/edit`,
  },
};

export default urls;
