'use strict';

/**
 *  viewer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::viewer.viewer');
