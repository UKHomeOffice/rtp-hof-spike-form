'use strict';

var hof = require('hof');
var wizard = hof.wizard;
var mixins = hof.mixins;
var i18nFuture = hof.i18n;
var router = require('express').Router();
var path = require('path');
var _ = require('underscore');
var controllers = require('hof').controllers;
var BaseController = controllers.base;

var fields = _.extend({}, require('../common/fields/'), require('./fields/'));
var i18n = i18nFuture({
  path: path.resolve(__dirname, './translations/__lng__/__ns__.json')
});

router.use(mixins(fields, {
  translate: i18n.translate.bind(i18n),
  viewsDirectory: path.resolve(__dirname, '../common/template-mixins')
}));

router.use('/register-to-apply/', wizard(require('./steps'), fields, {
  controller: BaseController,
  templatePath: path.resolve(__dirname, 'views'),
  translate: i18n.translate.bind(i18n),
  params: '/:action?'
}));

router.use('/', function redirectUrl(req, res) {
  res.redirect('/register-to-apply');
});

module.exports = router;
