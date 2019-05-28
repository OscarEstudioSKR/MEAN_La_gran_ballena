export class UsersModel {
    _id: string;
    userName: string;

    constructor(_id = "0", userName= "noName" ){
        this._id = _id;
        this.userName = userName;
    }

}
