'use strict';

/**
 *  single-player controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::single-player.single-player');
