export class UsersModel {
    _id: string;
    userName: string;

    constructor(_id = "", userName= "" ){
        this._id = _id;
        this.userName = userName;
    }

}
