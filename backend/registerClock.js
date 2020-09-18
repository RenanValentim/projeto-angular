var mongoose = require('mongoose');
var Schema = mongoose.Schema;

    var registerClockSchema = new Schema({
        user: String,
        hour: String,
        minutes: String,
        data: Date
        
}, {versionKey: false});

module.exports = mongoose.model("registerClock", registerClockSchema);

