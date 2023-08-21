'use strict';

/**
 * multi-player router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::multi-player.multi-player');
