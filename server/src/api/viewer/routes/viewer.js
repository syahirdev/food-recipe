'use strict';

/**
 * viewer router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::viewer.viewer');
