export class UsersModel {
    _id: string;
    userName: string;
    userPassword: string;

    constructor(_id = "", userName= "", userPassword=""){
        this._id = _id;
        this.userName = userName;
        this.userPassword = userPassword;
    }

}
