/*!
 * minibase-is-registered <https://github.com/node-minibase/minibase-is-registered>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

module.exports = function minibaseIsRegistered (opts) {
  return function minibaseIsRegistered (self) {
    var registered = self.registered && typeof self.registered === 'object'
      ? self.registered
      : {}

    self.define('registered', registered)
    self.define('isRegistered', function isRegistered (name) {
      if (self.registered.hasOwnProperty(name)) {
        return true
      }
      self.registered[name] = true
      return false
    })
  }
}
