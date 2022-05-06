const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    aPhone: {
        type: Number,
        required: true
    },
    aadhar: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    
    dob: {
        type: Date,
        required: true
    },
    maritialStatus: {
        type: String,
        required: true
    },
   about: {
        type: String,
        required: true
    },
     
    doctorName: {
        type: String,
        required: true
    },
    consultationFee: {
        type: Number,
        required: true
    },


});

const Record = mongoose.model('record', recordSchema);

module.exports = Record;