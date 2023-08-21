'use strict';

/**
 * single-player service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::single-player.single-player');
