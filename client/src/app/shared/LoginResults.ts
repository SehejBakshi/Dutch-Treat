export class LoginResults {
    token: string;
    expiration: Date;

    constructor() {
        this.token = '';
        this.expiration = new Date();
    }
}

export class LoginRequest {
    username: string;
    password: string;

    constructor() {
        this.username = '';
        this.password = '';
    }
}