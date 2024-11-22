const mongoose = require("mongoose");

const housingSchema = new mongoose.Schema({
    idhousing: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    availableUnits: {
        type: Number,
        required: true
    },
    wifi: {
        type: Boolean,
        required: true
    },
    laundry: {
        type: Boolean,
        required: true
    }
});

const Housing = mongoose.model('Housing', housingSchema);
module.exports = Housing;