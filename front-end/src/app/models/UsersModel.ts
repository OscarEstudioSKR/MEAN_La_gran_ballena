export class UsersModel {
    _id: string;
    userName: string;
    userMail: string;
    userPassword: string;

    constructor(_id = "", userName= "", userMail="", userPassword=""){
        this._id = _id;
        this.userName = userName;
        this.userMail = userMail;
        this.userPassword = userPassword;
    }

}
