export interface UserRead {
  id: number;
  email: string;
  username: string;
  surname: string;
  avatar: any;
  bg_img: any;
  edu: string;
  num_telephone: string;
  info: string;
  city: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
}

export interface UserLog {
  username: string;
  password: string;
}

export interface BearerResponse {
  access_token: string;
  token_type: string;
}
