/*!
 * minibase-is-registered <https://github.com/node-minibase/minibase-is-registered>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var isRegistered = require('./index')
var MiniBase = require('minibase').MiniBase

test('should have `.isRegistered` method', function (done) {
  var app = new MiniBase()
  app.use(isRegistered())
  test.strictEqual(typeof app.isRegistered, 'function')
  done()
})

test('should not call plugin twice if it is already registered', function (done) {
  var app = new MiniBase()
  var called = 0

  function plugin () {
    return function foo (self) {
      if (self.isRegistered('foo')) return
      called = called + 22
    }
  }

  app.use(isRegistered())
  app.use(plugin())
  app.use(plugin())
  test.strictEqual(called, 22)
  done()
})

test('should use `app.registered` prop if it is object and already exist', function (done) {
  var minibase = new MiniBase()
  var count = 33
  function fn (self) {
    if (self.isRegistered('bar')) return
    count = count + 11
  }
  minibase.registered = { bar: true }
  minibase.use(isRegistered())
  minibase.use(fn)
  minibase.use(fn)
  test.strictEqual(count, 33)
  done()
})
