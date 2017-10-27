'use strict';

/**
 * @file Route handler for `/v1/objects`
 */

const knex = require('../../db');

module.exports = {

    find: function* find(next) {

      let query = knex('jodels').select('data').limit(100).whereRaw('created_at > NOW() - interval \'3 days\'');

      if(this.query.sort) {
        if(this.query.sort === 'popular') query.orderByRaw('(data->>\'vote_count\')::int desc')
        else if(this.query.sort === 'discussed') query.orderByRaw('(data->>\'child_count\')::int desc')
        else query.orderByRaw('data->>\'created_at\' desc')
      }

      const jodels = yield query;

      this.body = jodels.map(j => j.data);
      this.status = 200;

      yield next;

    },

    findOne: function* findOne(next) {

      const jodel_id = this.params.jodel_id;
      const result = yield knex('jodels').where('post_id', jodel_id).limit(1);

      if(result.length === 0) {
        this.body = `Jodel ${jodel_id} could not be found`;
        this.status = 404;
      } else {
        this.body = result[0];
        this.status = 200;
      }

      yield next;

    }

    // getComments: function* getComments(next) {

    //   const jodel_id = this.params.jodel_id;
    //   const result = yield knex('jodels').where('parent', jodel_id).orderBy('created_at');

    //   this.body = result;
    //   this.status = 200;

    // }

};
