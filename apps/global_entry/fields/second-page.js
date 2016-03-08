'use strict';

module.exports = {
  'passportNumber': {
    validate: ['required', 'numeric'],
    label: 'fields.passportNumber.label'
  },
  'passportExpiry': {
    validate: ['required', 'numeric'],
    legend: 'fields.passportExpiry.legend',
    hint: 'fields.passportExpiry.hint'
  },
  'passportExpiry-day': {
    label: 'fields.passportExpiry-day.label'
  },
  'passportExpiry-month': {
    label: 'fields.passportExpiry-month.label'
  },
  'passportExpiry-week': {
    label: 'fields.passportExpiry-year.label'
  }
};
