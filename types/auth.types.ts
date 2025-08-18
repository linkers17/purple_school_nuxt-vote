export interface User {
  created_at: string,
  email: string,
  id: number,
}

export interface LoginRequest {
  email: string,
  password: string,
}

export interface LoginResponse {
  token: string,
  user: User,
}