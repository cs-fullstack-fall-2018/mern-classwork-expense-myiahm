const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const InfoSchema = new Schema({
        userName: String,
        password: String,
        accountBalance: Number
    }
);

const Info = mongoose.model('Info' , InfoSchema);

module.exports = Info;