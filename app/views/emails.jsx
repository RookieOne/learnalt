/** @jsx React.DOM */
var React = require('react')
var _ = require("underscore")
var EmailListItem = require("./email-list-item.jsx")

var emails = [{
  unread: false,
  subject: "Good news everyone!",
  from: "Doctor Farnsworth",
  previewText: "You are now worth more dead than alive! So for...",
  open: false
}, {
  unread: false,
  subject: "Good news everyone!",
  from: "Doctor Farnsworth",
  previewText: "You are now worth more dead than alive! So for...",
  open: true
}, {
  unread: true,
  subject: "Good news everyone!",
  from: "Doctor Farnsworth",
  previewText: "You are now worth more dead than alive! So for...",
  open: false
}, {
  unread: true,
  subject: "Good news everyone!",
  from: "Doctor Farnsworth",
  previewText: "You are now worth more dead than alive! So for...",
  open: false
}]

module.exports = React.createClass({
  getInitialState: function() {
    return {
      emails: emails
    }
  },
  render: function() {
    var emails = _.map(this.state.emails, function(email) {
      return (<EmailListItem email={email} />)
    })

    return (
      <ul id="emails" className="collection with-header">
        { emails }
      </ul>
    )
  }
})
