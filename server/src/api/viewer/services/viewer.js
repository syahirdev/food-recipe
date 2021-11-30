'use strict';

/**
 * viewer service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::viewer.viewer');
