export default class RegisterRequest {

    constructor(public Email: string,
                public Username: string,
                public Password: string,
                public FirstName?: string,
                public LastName?: string) {

    }
}