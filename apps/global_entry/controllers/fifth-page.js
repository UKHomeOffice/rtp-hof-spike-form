'use strict';

var util = require('util');
var controllers = require('hof').controllers;
var DateController = controllers.date;

var FifthPageController = function FifthPageController() {
  this.dateKey = 'dateOfBirth';
  DateController.apply(this, arguments);
};

util.inherits(FifthPageController, DateController);

FifthPageController.prototype.validateField = function validateField(keyToValidate, req) {
  return DateController.prototype.validateField.call(this, keyToValidate, req, false);
};

module.exports = FifthPageController;
