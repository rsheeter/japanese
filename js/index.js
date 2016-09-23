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
  var elsCycle = document.querySelectorAll('[data-cycle]')

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

  var contentCycle = function (els, otps) {
    var opts = {
      timeout: 1000,
      scale: true
    }

    this.changeContent = function (el, content) {
      console.log('change')
      el.textContent = content
      // if (opts.scale) {
      //   fitterHappierText([el.parentNode], { baseline: 14, paddingY: 2 })
      // }
    }

    if (els.length > 0) {
      for (var i = 0; i < els.length; i++) {
        var self = this
        var el = els[i]
        var num = 0
        var dataCycle = el.getAttribute('data-cycle')
        var dataCycleTimeout = el.getAttribute('data-cycleTimeout')
        var contentList = typeof dataCycle !== 'undefined' ? dataCycle.split(', ') : []
        var timeout = typeof dataCycleTimeout !== 'undefined' ? parseInt(dataCycleTimeout, 10) : opts.timeout

        // Init contentList,`0` timeout to init
        // immediately with first list item content
        setTimeout(function() { cycle(contentList, 0); }, 0);

        function cycle(contentList, num) {
          self.changeContent(el, contentList[num], num)

          setTimeout(function() { cycle(contentList, ((num + 1) >= contentList.length) ? 0 : num + 1); }, timeout);
        }
      }

    }
  }

  contentCycle(elsCycle)

}
