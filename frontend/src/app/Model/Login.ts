import { User } from "./User";

export interface Login {
    email: string
}

export interface LoginResult {
    user: User,
    isLogged: boolean
}