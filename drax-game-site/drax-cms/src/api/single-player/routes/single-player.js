'use strict';

/**
 * single-player router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::single-player.single-player');
