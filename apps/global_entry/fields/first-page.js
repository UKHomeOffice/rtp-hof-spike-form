'use strict';

module.exports = {
  'passportNationality': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    options: [{
      value: 'GBR',
      label: 'Yes',
    }, {
      value: 'No',
      label: 'No'
    }]
  }
};
