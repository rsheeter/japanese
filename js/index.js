---
# Front-matter comment for Jekyll
---

var bigIdeasText = require('big-ideas-text')
var fitterHappierText = require('fitter-happier-text')
var googleFontsBadge = require('@googlefonts/badge')

if (document) {
  var elsBigIdeasText = document.getElementsByClassName('js-bigIdeasText')
  var elsFitterHappierText = document.getElementsByClassName('js-fitterHappierText')

  bigIdeasText(elsBigIdeasText)
  fitterHappierText(elsFitterHappierText) // opts: { baseline: 14, paddingY: 2 }

  // Based on approach in https://git.io/viDQx
  if (typeof window !== 'undefined') {
    if (typeof window.navigator !== 'undefined' && typeof window.navigator.userAgent !== 'undefined') {
      var ua = window.navigator.userAgent
      if (!(ua.match(/android [0-2]/i) || ua.match(/(iphone|ipad|ipod).+(OS [0-6])/i))) {
        googleFontsBadge()
      }
    }
  }
}
