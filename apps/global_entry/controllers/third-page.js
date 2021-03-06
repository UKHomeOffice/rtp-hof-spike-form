'use strict';

var util = require('util');
var controllers = require('hof').controllers;
var DateController = controllers.date;

var ThirdPageController = function ThirdPageController() {
  this.dateKey = 'passportExpiry';
  DateController.apply(this, arguments);
};

util.inherits(ThirdPageController, DateController);

ThirdPageController.prototype.validateField = function validateField(keyToValidate, req) {
  return DateController.prototype.validateField.call(this, keyToValidate, req, false);
};

module.exports = ThirdPageController;
