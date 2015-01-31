/** @jsx React.DOM */
var React = require('react')
var EmailActions = require("../actions/email-actions.js")


module.exports = React.createClass({
  addEmail: function() {
    EmailActions.addEmail()
  },
  render: function() {
    return (
      <a className="waves-effect waves-light btn" onClick={this.addEmail}>New Message</a>
    )
  }
})
