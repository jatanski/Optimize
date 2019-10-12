const Joi = require('@hapi/joi');
const mongoose = require('mongoose')

const Comment = mongoose.model('Comment', new mongoose.Schema({
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
    likes_count: {
        type: Number,
        default: 0
    }
}))

function validateComment(comment) {
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
        threadId: Joi.string()
            .min(5)
            .max(1024)
            .required(),
        teamId: Joi.string()
            .min(5)
            .max(1024)
            .required()
    }
    return Joi.validate(comment, schema);
}

exports.Comment = Comment;
exports.validate = validateComment;