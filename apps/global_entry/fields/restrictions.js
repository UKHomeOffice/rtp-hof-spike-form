'use strict';

module.exports = {
  'criminalConviction': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    options: [{
      value: 'Yes',
      label: 'Yes',
    }, {
      value: 'No',
      label: 'No'
    }]
  },
  'refusedEntry': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    options: [{
      value: 'Yes',
      label: 'Yes',
    }, {
      value: 'No',
      label: 'No'
    }]
  },
  'customsPenalties': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    options: [{
      value: 'Yes',
      label: 'Yes',
    }, {
      value: 'No',
      label: 'No'
    }]
  }
};


