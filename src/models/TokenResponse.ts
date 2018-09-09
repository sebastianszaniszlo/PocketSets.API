import UserResponse from "./UserResponse";

export default class TokenResponse {

    constructor(public Token: string,
                public User: UserResponse) {

    }
}