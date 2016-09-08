---
# Front-matter comment for Jekyll
---

var bigIdeasText = require('big-ideas-text')
var fitterHappierText = require('fitter-happier-text')

if (document) {
  var elsBigIdeasText = document.getElementsByClassName('js-bigIdeasText')
  var elsFitterHappierText = document.getElementsByClassName('js-fitterHappierText')

  bigIdeasText(elsBigIdeasText)
  fitterHappierText(elsFitterHappierText) // opts: { baseline: 14, paddingY: 2 }
}
