'use strict';

module.exports = {
  'alias-yes-no': {
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
      field: 'alias-yes-no',
      value: 'Yes'
    }
  }
};
