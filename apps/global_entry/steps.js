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
    next: '/second-page'
  },
  '/second-page': {
    template: 'second-page',
    fields: [
      'passport-number',
    ],
    next: '/third-page'
  },
  '/third-page': {
    template: 'third-page',
    fields: [
      'yes-no-radio',
      'example-depends-on-text'
    ],
    next: '/fourth-page'
  },
  '/fourth-page': {
    controller: require('./controllers/fourth-page'),
    template: 'fourth-page',
    fields: ['multiples-input'],
    next: '/confirm'
  },
  '/confirm': {
    controller: require('./controllers/confirm'),
    template: 'confirm.html',
    next: '/confirmation'
  },
  '/confirmation': {
    template: 'confirmation.html',
    backLink: false,
    clearSession: true
  }
}
;
