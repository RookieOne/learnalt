var Alt = require('alt')
var alt = new Alt()

var React = require("react")

var Main = require("./views/main.jsx")

$(function() {
  React.render(<Main />, document.body);
})
