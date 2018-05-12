'use strict';

/**
 * @file Route defintions for `/v1/objects`
 */

const Router = require('koa-router');
const router = new Router();

const controllers = require('../../controllers');
const jodelController = controllers.v1.jodelController;

router.get('/jodels', jodelController.find);
router.get('/jodels/:jodel_id', jodelController.findOne);
router.get('/jodels/:jodel_id/comments', jodelController.getComments);

module.exports = router;
