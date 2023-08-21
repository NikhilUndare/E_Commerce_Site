'use strict';

/**
 * multi-player service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::multi-player.multi-player');
