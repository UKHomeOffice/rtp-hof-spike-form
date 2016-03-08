'use strict';

module.exports = {
  'surname': {
    validate: ['required'],
    legend: 'fields.surname.legend'
  },
  'givenName': {
    validate: ['required'],
    legend: 'fields.givenName.legend'
  },
  'otherNames': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    options: [{
      value: 'Yes',
      label: 'Yes',
      toggle: 'additional-alias'
    }, {
      value: 'No',
      label: 'No'
    }]
  },
  'additional-alias': {
    validate: ['required'],
    legend: 'fields.additional-alias.legend',
    dependent: {
      field: 'otherNames',
      value: 'Yes'
    }
  }
};
