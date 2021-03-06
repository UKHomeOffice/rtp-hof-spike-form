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
    next: '/restrictions',
    forks: [{
      target: '/exit-page',
      condition: {
        field: 'passportNationality',
        value: 'No'
      }
    }]
  },
  '/restrictions': {
    template: 'restrictions',
    fields: [
      'criminalConviction',
      'refusedEntry',
      'customsPenalties'
    ],
    next: '/third-page',
    forks: [{
      target: '/exit-page',
      condition: {
        field: 'criminalConviction',
        value: 'No'
      }
    }, {
      target: '/exit-page',
      condition: {
        field: 'refusedEntry',
        value: 'No'
      }
    },
      {
        target: '/exit-page',
        condition: {
          field: 'customsPenalties',
          value: 'No'
        }
      }
    ]
  },
  '/third-page': {
    controller: require('./controllers/third-page'),
    template: 'third-page',
    fields: [
      'passportNumber',
      'passportExpiry',
      'passportExpiry-day',
      'passportExpiry-month',
      'passportExpiry-year'
    ],
    next: '/fourth-page'
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
    next: '/sixth-page'
    },
    '/sixth-page': {
      template: 'sixth-page',
      fields: [
        'email'
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
