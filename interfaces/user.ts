import { IUser, IRole } from "@/interfaces";

interface IUserAdminForm extends IUser {
  password: string;
  role_id: string;
}

export interface IData {
  [key: string]: string;
}

export interface IErrors {
  [key: string]: string;
}

export interface IQueryParams {
  q?: string;
  page?: number;
  per_page?: number;
  order?: string;
  order_column?: string;
}

export interface IPagination {
  page: number;
  pages: number;
  per_page: number;
  total: number;
  prev: number;
  next: number;
}

export interface IProfileItem {
  icon: JSX.Element;
  label: string;
  value: string;
}

export interface IAccountProps {
  data: IUser;
  submitErrors: IErrors[];
  loading: boolean;
  onSubmit: (data: IData) => void;
}

export interface IAuthProps {
  data: IUser;
  submitErrors: IErrors[];
  loading: boolean;
  onSubmit: (data: IData) => void;
}

export interface ILoginProps {
  loading: boolean;
  onSubmit: (data: IData) => void;
}

export interface INewUserProps {
  roles: IRole[];
  data: IUserAdminForm;
  submitErrors: IErrors[];
  loading: boolean;
  onSubmit: (data: IData) => void;
}

export interface IPasswordProps {
  submitErrors: IErrors[];
  loading: boolean;
  onSubmit: (data: IData) => void;
}

export interface IProfileProps {
  user: IUser;
}

export interface ISettingsProps {
  children: React.ReactNode;
}

export interface IUsersTableProps {
  users: {
    data: IUser[];
    pagination: IPagination;
  };
}
