export class LoginModel {
    username: string;  
    password: string;

    constructor(uname: string, pwd: string) {
        this.username = uname; 
        this.password = pwd;
    }
}

