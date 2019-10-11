const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const teamSchema = mongoose.model('team', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    users: {
        type: Array,
        required: true
    },
    threads: {
        type: Array,
        required: true
    }
}));

function validateTeam(model) {
  const schema = {
    name: Joi.string()
        .min(5)
        .max(50)
        .required(),
    description: Joi.string()
        .min(5)
        .max(50)
        .required()
  }
    
  return Joi.validate(model, schema);
  };

exports.Team = Team;
exports.validate = validateTeam;
