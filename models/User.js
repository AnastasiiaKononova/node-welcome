/*
Model (модель) - це об'єктне представлення даних, яке може бути пов'язано з бд, але представляє дані у вигляді, придатому для js-кода
*/

const db = new Map();
class User {
    constructor({firstName, lastName, email, password, isSubscribed}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.isSubscribed = isSubscribed;
        this.createdAt = new Date();
        this.id = db.size + 1;
    }
    addUser() {
        db.set(this.id, this);
        return this;
    }
    static findOne(userId) {
        return db.get(userId);
    }
    static findAll() {
        return [...db.values()]
    }
    deleteUser() {
        return db.delete(this.id);
    }

    static updateUser(userId, userData) {
        const user = db.get(userId);
        const newData = {
            ...user,
            ...userData
        };
       return db.set(userId, newData);
    }
}
/*
Create - createOne
Read - getAll, getOne
Update - updateOne
Delete - deleteOne
*/

module.exports = User;