'use strict';

/**
 * @file Exports a configuration object based on NODE_ENV
 */

module.exports = {

    port: process.env.PORT || 3000,

    dburl: process.env.DBURL ||  'pg://jodel:jodel@localhost:5432/jodel_export_example'

};
