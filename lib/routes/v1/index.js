'use strict';

/**
 * @file Exports a router that contains all routes for `/v1`
 */

const Router = require('koa-router');
const router = new Router({
    prefix: '/v1'
});

const jodelRoutes = require('./jodelRoutes');

router.use(jodelRoutes.routes());
router.use(jodelRoutes.allowedMethods());

module.exports = router;
