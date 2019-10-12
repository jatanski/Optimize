const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const Team = mongoose.model(
  "team",
  new mongoose.Schema({
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
    channelId: {
      type: String
    },
    users: {
      type: Array,
      required: true
    },
    roles: {
      type: Array,
      required: true
    },
    threads: {
      type: Array,
      required: true
    },
    slackId: {
      type: String
    }
  })
);

function validateTeam(team) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    description: Joi.string()
      .min(5)
      .max(50)
      .required(),
    users: Joi.array().items(Joi.string()),
    roles: Joi.array().items(Joi.string()),
    slackId: Joi.string()
  };

  return Joi.validate(team, schema);
}

module.exports.Team = Team;
module.exports.validate = validateTeam;
