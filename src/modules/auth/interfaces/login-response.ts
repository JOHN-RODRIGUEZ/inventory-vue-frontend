import type { IUser } from "./user";

export interface ILoginResponse {
    user:  IUser;
    token: string;
}
