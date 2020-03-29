const knex = require("knex");
const configuration = require("../../knexfile");

const selected =
  process.env.NODE_ENV === "test"
    ? configuration.test
    : configuration.development;

const connection = knex(selected);

module.exports = connection;
