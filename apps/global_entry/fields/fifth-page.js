'use strict';

module.exports = {
  'dateOfBirth': {
    validate: ['required', 'numeric'],
    legend: 'fields.dateOfBirth.legend',
    hint: 'fields.dateOfBirth.hint'
  },
  'dob-day': {
    label: 'fields.dateOfBirth-day.label'
  },
  'dob-month': {
    label: 'fields.dateOfBirth-month.label'
  },
  'dob-week': {
    label: 'fields.dateOfBirth-year.label'
  },
  'gender': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    options: [{
      value: 'Male',
      label: 'Male',
    }, {
      value: 'Female',
      label: 'Female'
    }]
  }
};
