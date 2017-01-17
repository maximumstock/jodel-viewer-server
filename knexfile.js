// Update with your config settings.

const config = require('./config');

const knexConfig = {
    client: 'postgresql',
    connection: config.dburl,
    pool: {
        min: 2,
        max: 10
    }
};

module.exports = {

    development: knexConfig,
    staging: knexConfig,
    production: knexConfig

};
