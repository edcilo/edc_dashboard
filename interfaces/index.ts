export interface IRole {
  id: string;
  name: string;
  fixed: boolean;
  created_at: number;
}

export interface IPermission {
  id: string;
  name: string;
  fixed: boolean;
  created_at: number;
}

export interface IProfile {
  birthday: string | null;
  gender: string | null;
}

export interface IUser {
  id: string;
  email: string;
  phone: string;
  name: string;
  lastname: string;
  second_lastname: string;
  is_active: boolean;
  created_at: number;
  deleted_at: number | null;
  profile: IProfile;
  roles: IRole[];
  permissions: IPermission[];
}
