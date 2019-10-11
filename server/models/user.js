const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const config = require('config');

const userSchema = new mongoose.Schema({
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
        maxlength: 50,
        default: "Mac"
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
    slackId: {
        type: String,
        required: true,
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
        enum: ["Admin", "Moderator", "User"]
    },
    teams: {
        type: Array,
        required: true,
    },
});


function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    avatar: 'https://osclass.calinbehtuk.ro/oc-content/themes/vrisko/images/no_user.png',
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(1024)
      .required()
  };

  return Joi.validate(user, schema);
}


userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'));
  return token;
};

const User = mongoose.model('User', userSchema);

module.exports.User = User;