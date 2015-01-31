/** @jsx React.DOM */
var React = require('react')
var EmailActions = require("../actions/email-actions.js")

module.exports = React.createClass({
  addEmail() {
    EmailActions.addEmail()
  },
  render() {
    return (
      <a className="waves-effect waves-light btn" onClick={this.addEmail}>New Message</a>
    )
  }
})
