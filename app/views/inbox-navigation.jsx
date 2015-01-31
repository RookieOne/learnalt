/** @jsx React.DOM */
var React = require('react')
var InboxStore = require("../stores/inbox-store.js")

module.exports = React.createClass({
  mixins: [require("alt/mixins/ListenerMixin")],
  getInitialState: function() {
    return InboxStore.getState()
  },
  componentWillMount: function() {
    this.listenTo(InboxStore, this.onChange)
  },
  onChange: function() {
    this.setState(InboxStore.getState())
  },
  render: function() {
    return (
      <ul className="collection">
        <li className="collection-item">
          <a href="#!">
            <i className="fa fa-inbox"></i>
            Inbox
          </a>
          <a>
            <span className="badge new">{ this.state.unread }</span>
          </a>
        </li>
      </ul>
    )
  }
})
