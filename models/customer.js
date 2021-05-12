const mongoose = require('mongoose')
const express = require('express');
const router = express.Router()
const alienSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }

})

module.exports = mongoose.model('Alien',  alienSchema)