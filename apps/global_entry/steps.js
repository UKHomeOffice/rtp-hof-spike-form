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
    next: '/second-page',
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
    next: '/third-page',
  },
  '/exit-page': {
    template: 'exit-page',
    clearSession: true
  },
  '/fourth-page': {
    template: 'fourth-page',
    fields: [
      'alias-yes-no',
      'additional-alias'
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
