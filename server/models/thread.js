const Joi = require('@hapi/joi');
const mongoose = require('mongoose')

const Thread = mongoose.model('Thread', new mongoose.Schema({
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
    },
    category: {
        type: String,
        required: true
    },
    target: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 1024
    } 
}));

function validateThread(thread)
{
    const schema = {
        name: Joi.string()
            .min(2)
            .max(50)
            .required(),
        author: Joi.string()
            .min(5)
            .max(50),
        content: Joi.string()
            .min(5)
            .max(1024)
            .required(),
        teamId: Joi.string()
            .min(5)
            .max(1024)
            .required(),
        category: Joi.string()
            .min(4)
            .max(1024)
            .required(),
        target: Joi.string()
            .min(4)
            .max(1024)
            .required(),
    }
    return Joi.validate(thread, schema);
}

exports.Thread = Thread;
exports.validate = validateThread;