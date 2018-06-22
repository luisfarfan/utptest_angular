export interface IAuthBody {
  username: string;
  password: string;
}

export interface IAuthResponse {
  user: string;
  password: string;
  name: string;
  last_name: string;
  active: string;
}
