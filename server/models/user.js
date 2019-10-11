const mongose = require('mongoose');
const Joi = require('@hapi/joi');

const userSchema = new mongose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    surname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    avatar: {
        type: String,
        minlength: 5,
        maxlength: 512,
        deafult: 'https://osclass.calinbehtuk.ro/oc-content/themes/vrisko/images/no_user.png',
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    team_role: {
        type: String, 
        required: true,
        enum: [Admin, Moderator, User]
    },
    teams: {
        type: Array,
        required: true,
    },
})