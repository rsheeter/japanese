---
# Front-matter comment for Jekyll
---

var bigIdeasText = require('big-ideas-text')
var fitterHappierText = require('fitter-happier-text')
var googleFontsBadge = require('@googlefonts/badge')
var smoothScroll = require('smoothscroll')

if (document) {
  var elsBigIdeasText = document.getElementsByClassName('js-bigIdeasText')
  var elsFitterHappierText = document.getElementsByClassName('js-fitterHappierText')

  bigIdeasText(elsBigIdeasText)
  fitterHappierText(elsFitterHappierText, { baseline: 14, paddingY: 2 }) // TODO Opts from data-attrs

  // Based on approach in https://git.io/viDQx
  if (typeof window !== 'undefined') {
    if (typeof window.navigator !== 'undefined' && typeof window.navigator.userAgent !== 'undefined') {
      var ua = window.navigator.userAgent
      if (!(ua.match(/android [0-2]/i) || ua.match(/(iphone|ipad|ipod).+(OS [0-6])/i))) {
        googleFontsBadge()
      }
    }
  }

  var transitionLoop = function (el) {
    var opts = {
      className: 'is-translated-100',
      timeout: 5000
    }

    this.addTransitionClass = function () {
      el.classList.add(opts.className)

      setTimeout(function () {
        self.removeTransitionClass()
      }, opts.timeout)
    }

    this.removeTransitionClass = function () {
      el.classList.remove(opts.className)

      setTimeout(function () {
        self.addTransitionClass()
      }, opts.timeout)
    }

    el.classList.add('is-translated') // Transiton class

    setTimeout(function () {
      var self = this
      self.addTransitionClass()
    }, opts.timeout)
  }

  transitionLoop(document.getElementById('js-translateLoop'))



}
