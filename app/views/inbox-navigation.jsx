/** @jsx React.DOM */
var React = require('react')
var InboxStore = require("../stores/inbox-store.js")

module.exports = React.createClass({
  mixins: [require("alt/mixins/ListenerMixin")],
  getInitialState() {
    return InboxStore.getState()
  },
  componentWillMount() {
    this.listenTo(InboxStore, this.onChange)
  },
  onChange() {
    this.setState(InboxStore.getState())
  },
  render() {
    var unread = this.state.unread === 0
      ? ""
      : (
        <span className="badge new">{ this.state.unread }</span>
      )

    return (
      <ul className="collection" id="inbox-navigation">
        <li className="collection-item">
          <i className="fa fa-inbox"></i>
          Inbox
          { unread }
        </li>
      </ul>
    )
  }
})
