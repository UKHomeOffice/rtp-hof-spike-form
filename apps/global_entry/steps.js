'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/first-page'
  },
  '/first-page': {
    template: 'first-page',
    fields: [
      'british-citizen-radio'
    ],
    next: '/second-page',
    forks: [{
      target: '/exit-page',
      condition: {
        field: 'british-citizen-radio',
        value: 'no'
      }
    }]
  },
  '/second-page': {
    template: 'second-page',
    fields: [
      'passport-number',
    ],
    next: '/third-page',
    forks: [{
      target: '/exit-page',
      condition: {
        field: 'passport-number',
        value: '123'
      }
    }]
  },
  '/exit-page': {
    template: 'exit-page',
    clearSession: true
  },
  '/third-page': {
    template: 'third-page',
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
