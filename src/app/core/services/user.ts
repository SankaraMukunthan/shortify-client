export class User {
    _id: string;
    firstName: string;
    lastName: string;
    emailId: string;
    pwd:string;
}

export interface LoginResponse {
    success: boolean;
    token: string;
}
