<p align="center">
  <a href="https://github.com/node-minibase">
    <img height="250" width="250" src="https://avatars1.githubusercontent.com/u/23032863?v=3&s=250">
  </a>
</p>

# [minibase-is-registered][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Plugin for [minibase][] and [base][], that adds `isRegistered` method to your application to detect if plugin is already registered and returns true or false if named plugin is already registered on the instance.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
> Install with [npm](https://www.npmjs.com/)

```sh
$ npm i minibase-is-registered --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const minibaseIsRegistered = require('minibase-is-registered')
```

## API

### [minibaseIsRegistered](index.js#L36)
> Adds `.isRegistered` method to your application. That `opts` option is optional and does nothing. It is just convention each plugin to export function that returns a plugin.

**Params**

* `opts` **{Object}**: optional, no options currently    
* `returns` **{Function}**: plugin that can be pass to [base][]/[minibase][]'s `.use` method  

**Example**

```js
var isRegistered = require('minibase-is-registered')

var MiniBase = require('minibase').MiniBase
var app = new MiniBase()
app.use(isRegistered())

// or as Base plugin

var Base = require('base')
var base = new Base()
base.use(isRegistered())
```

### [.isRegistered](index.js#L81)
> Checks if given `name` exists in `app.registered` cache object, to detect if should call the plugin or not.

**Params**

* `name` **{String}**: name of the plugin    
* `returns` **{Boolean}**: always boolean `true` or `false`  

**Example**

```js
app.use(isRegistered())

var called = 0

function fakePlugin () {
  return function foo (app) {
    if (app.isRegistered('foo')) return
    called = called + 22
  }
}

app.use(fakePlugin())
app.use(fakePlugin())

// the plugin `fakePlugin` is called only once
// if it was called two times `called` will be 44
console.log(called) // => 22
```

## Related
- [always-done](https://www.npmjs.com/package/always-done): Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100… [more](https://github.com/hybridables/always-done#readme) | [homepage](https://github.com/hybridables/always-done#readme "Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100% of its tests plus more")
- [base](https://www.npmjs.com/package/base): base is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting with a handful of common methods, like `set`, `get`, `del… [more](https://github.com/node-base/base) | [homepage](https://github.com/node-base/base "base is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting with a handful of common methods, like `set`, `get`, `del` and `use`.")
- [is-registered](https://www.npmjs.com/package/is-registered): Util for Base that optionally prevents a plugin from being registered more than once on an instance | [homepage](https://github.com/jonschlinkert/is-registered "Util for Base that optionally prevents a plugin from being registered more than once on an instance")
- [minibase](https://www.npmjs.com/package/minibase): MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation for building complex APIs with small units called plugins. Works well with most… [more](https://github.com/node-minibase/minibase#readme) | [homepage](https://github.com/node-minibase/minibase#readme "MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation for building complex APIs with small units called plugins. Works well with most of the already existing [base][] plugins.")
- [try-catch-core](https://www.npmjs.com/package/try-catch-core): Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and used in higher-level libs such… [more](https://github.com/hybridables/try-catch-core#readme) | [homepage](https://github.com/hybridables/try-catch-core#readme "Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and used in higher-level libs such as [always-done][] to handle completion of anything.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/node-minibase/minibase-is-registered/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[always-done]: https://github.com/hybridables/always-done
[async-done]: https://github.com/gulpjs/async-done
[base]: https://github.com/node-base/base
[dezalgo]: https://github.com/npm/dezalgo
[minibase]: https://github.com/node-minibase/minibase
[once]: https://github.com/isaacs/once

[npmjs-url]: https://www.npmjs.com/package/minibase-is-registered
[npmjs-img]: https://img.shields.io/npm/v/minibase-is-registered.svg?label=minibase-is-registered

[license-url]: https://github.com/node-minibase/minibase-is-registered/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/minibase-is-registered.svg

[downloads-url]: https://www.npmjs.com/package/minibase-is-registered
[downloads-img]: https://img.shields.io/npm/dm/minibase-is-registered.svg

[codeclimate-url]: https://codeclimate.com/github/node-minibase/minibase-is-registered
[codeclimate-img]: https://img.shields.io/codeclimate/github/node-minibase/minibase-is-registered.svg

[travis-url]: https://travis-ci.org/node-minibase/minibase-is-registered
[travis-img]: https://img.shields.io/travis/node-minibase/minibase-is-registered/master.svg

[coveralls-url]: https://coveralls.io/r/node-minibase/minibase-is-registered
[coveralls-img]: https://img.shields.io/coveralls/node-minibase/minibase-is-registered.svg

[david-url]: https://david-dm.org/node-minibase/minibase-is-registered
[david-img]: https://img.shields.io/david/node-minibase/minibase-is-registered.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

