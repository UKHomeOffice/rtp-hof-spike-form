'use strict';

var _ = require('underscore');

module.exports = _.extend(
  require('./first-page'),
  require('./restrictions'),
  require('./third-page'),
  require('./fourth-page'),
  require('./fifth-page'),
  require('./sixth-page')
);
