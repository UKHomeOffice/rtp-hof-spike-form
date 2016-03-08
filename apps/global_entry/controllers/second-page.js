'use strict';

var util = require('util');
var controllers = require('hof').controllers;
var DateController = controllers.date;

var SecondPageController = function SecondPageController() {
  this.dateKey = 'passportExpiry';
  DateController.apply(this, arguments);
};

util.inherits(SecondPageController, DateController);

SecondPageController.prototype.validateField = function validateField(keyToValidate, req) {
  return DateController.prototype.validateField.call(this, keyToValidate, req, false);
};

module.exports = SecondPageController;
