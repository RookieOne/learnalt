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
      <header>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Emailz</a>

            <ul id="nav-mobile" className="right side-nav">
              <li>
                <a>
                  <span>{ this.state.unread } unread</span>
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
})
