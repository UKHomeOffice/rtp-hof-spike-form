'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/first-page'
  },
  '/first-page': {
    template: 'first-page',
    fields: [
      'passportNationality'
    ],
    next: '/second-page',
    forks: [{
      target: '/exit-page',
      condition: {
        field: 'passportNationality',
        value: 'no'
      }
    }]
  },
  '/second-page': {
    template: 'second-page',
    fields: [
      'criminalConviction',
      'refusedEntry',
      'customsPenalties'
    ],
    next: '/third-page',
  },
  '/third-page': {
    controller: require('./controllers/third-page'),
    template: 'third-page',
    fields: [
      'passportNumber',
      'passportExpiry',
      'passportExpiry-day',
      'passportExpiry-month',
      'passportExpiry-year',
    ],
    next: '/fourth-page',
  },
  '/exit-page': {
    template: 'exit-page',
    clearSession: true
  },
  '/fourth-page': {
    template: 'fourth-page',
    fields: [
      'surname',
      'givenName',
      'otherNames',
      'additional-alias'
    ],
    next: '/fifth-page',
  },
  '/fifth-page': {
    controller: require('./controllers/fifth-page'),
    template: 'fifth-page',
    fields: [
      'dateOfBirth',
      'dateOfBirth-day',
      'dateOfBirth-month',
      'dateOfBirth-year',
      'gender'
    ],
    next: '/confirm'
  },
  '/confirm': {
    controller: require('./controllers/confirm'),
    template: 'confirm.html',
    backLink: false,
    next: '/confirmation'
  },
  '/confirmation': {
    template: 'confirmation.html',
    backLink: false,
    clearSession: true
  }
}
;
