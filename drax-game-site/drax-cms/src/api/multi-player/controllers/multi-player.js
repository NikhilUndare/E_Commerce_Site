'use strict';

/**
 *  multi-player controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::multi-player.multi-player');
