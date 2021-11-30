'use strict';

/**
 * ingredient service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ingredient.ingredient');
