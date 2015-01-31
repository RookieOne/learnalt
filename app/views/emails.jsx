/** @jsx React.DOM */
var React = require('react')
var EmailListItem = require("./email-list-item.jsx")
var EmailsStore = require("../stores/emails-store.js")
var ListenerMixin = require("alt/mixins/ListenerMixin")

module.exports = React.createClass({
  mixins: [ListenerMixin],
  getInitialState() {
    return EmailsStore.getState()
  },
  componentWillMount() {
    this.listenTo(EmailsStore, this.onChange)
  },
  onChange() {
    this.setState(EmailsStore.getState())
  },
  render() {
    var emails = this.state.emails.map(email => {
      return (<EmailListItem key={email.id} email={email} />)
    })

    return (
      <ul id="emails" className="collection with-header">
        { emails }
      </ul>
    )
  }
})
