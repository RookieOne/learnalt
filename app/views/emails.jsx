/** @jsx React.DOM */
var React = require('react')
var _ = require("underscore")
var EmailListItem = require("./email-list-item.jsx")
var EmailsStore = require("../stores/emails.js")
var ListenerMixin = require("alt/mixins/ListenerMixin")

module.exports = React.createClass({
  mixins: [ListenerMixin],
  getInitialState: function() {
    return EmailsStore.getState()
  },
  componentWillMount: function() {
    this.listenTo(EmailsStore, this.onChange)
  },
  onChange: function() {
    this.setState(EmailsStore.getState())
  },
  render: function() {
    var emails = _.map(this.state.emails, function(email) {
      return (<EmailListItem key={email.id} email={email} />)
    })

    return (
      <ul id="emails" className="collection with-header">
        { emails }
      </ul>
    )
  }
})
