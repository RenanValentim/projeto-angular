var mongoose = require('mongoose');
var Schema = mongoose.Schema;

    var usersSchema = new Schema({
        name: String,
        email: String,
        fone: String,
        state: String,
        city: String        
}, {versionKey: false});

module.exports = mongoose.model("users", usersSchema);