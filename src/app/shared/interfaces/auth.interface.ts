export interface IAuthBody {
  username: string;
  password: string;
}

export interface IAuthResponse {
  id: number;
  user: string;
  password: string;
  name: string;
  last_name: string;
  active: string;
}
