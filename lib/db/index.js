'use strict';

/**
 * @file Exports an instance of an arbitrary database connection
 */

const config = require('../../config');
const knex = require('knex')({
    client: 'postgresql',
    connection: config.dburl,
    pool: {
        min: 2,
        max: 10
    }
});

module.exports = knex;
