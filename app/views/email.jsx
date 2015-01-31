/** @jsx React.DOM */
var React = require('react')
var EmailStore = require("../stores/email-store.js")

module.exports = React.createClass({
  mixins: [require("alt/mixins/ListenerMixin")],
  getInitialState() {
    return EmailStore.getState()
  },
  componentWillMount() {
    this.listenTo(EmailStore, this.onChange)
  },
  onChange() {
    this.setState(EmailStore.getState())
  },
  render() {
    if (this.state.email === undefined) {
      return (<span></span>)
    }

    return (
      <div id="email">
        <div className="from">{ this.state.email.from }</div>
        <div className="subject">{ this.state.email.subject }</div>
        <p>
          { this.state.email.previewText }
        </p>
      </div>
    )
  }
})
