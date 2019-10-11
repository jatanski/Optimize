const Joi = require('@hapi/joi');
const mongoose = require('mongoose')

const Thread = mongoose.model('Thread', new mongoose.Schuma({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    author: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    posted_at: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    comments: {
        type: Array
    }
}))

function validateThread(thread)
{
    const schema = {
        name: Joi.string()
            .min(2)
            .max(50)
            .required(),
        author: Joi.string()
            .min(5)
            .max(50)
            .required(),
        content: Joi.string()
            .min(5)
            .max(1024)
            .required(),
    }
}

exports.Thread = Thread;
exports.validate = validateThread;