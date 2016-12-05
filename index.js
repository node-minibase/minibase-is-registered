/*!
 * minibase-is-registered <https://github.com/node-minibase/minibase-is-registered>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

/**
 * > Adds `.isRegistered` method to your application. That
 * `opts` option is optional and does nothing. It is just convention
 * each plugin to export function that returns a plugin.
 *
 * **Example**
 *
 * ```js
 * var isRegistered = require('minibase-is-registered')
 *
 * var MiniBase = require('minibase').MiniBase
 * var app = new MiniBase()
 * app.use(isRegistered())
 *
 * // or as Base plugin
 *
 * var Base = require('base')
 * var base = new Base()
 * base.use(isRegistered())
 * ```
 *
 * @param  {Object} `opts` optional, no options currently
 * @return {Function} plugin that can be pass to [base][]/[minibase][]'s `.use` method
 * @api public
 */

module.exports = function minibaseIsRegistered (opts) {
  return function minibaseIsRegistered (self) {
    /* istanbul ignore next */
    if (self.isRegistered && self.isRegistered('is-registered')) {
      return
    }

    var registered = self.registered && typeof self.registered === 'object'
      ? self.registered
      : {}

    self.define('registered', registered)

    /**
     * > Checks if given `name` exists in `app.registered`
     * cache object, to detect if should call the plugin or not.
     *
     * **Example**
     *
     * ```js
     * app.use(isRegistered())
     *
     * var called = 0
     *
     * function fakePlugin () {
     *   return function foo (app) {
     *     if (app.isRegistered('foo')) return
     *     called = called + 22
     *   }
     * }
     *
     * app.use(fakePlugin())
     * app.use(fakePlugin())
     *
     * // the plugin `fakePlugin` is called only once
     * // if it was called two times `called` will be 44
     * console.log(called) // => 22
     * ```
     *
     * @name   .isRegistered
     * @param  {String}  `name` name of the plugin
     * @return {Boolean} always boolean `true` or `false`
     * @api public
     */

    self.define('isRegistered', function isRegistered (name) {
      if (self.registered.hasOwnProperty(name)) {
        return true
      }
      self._pluginName = name
      self.registered[name] = true
      return false
    })
  }
}
