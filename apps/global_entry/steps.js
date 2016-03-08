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
