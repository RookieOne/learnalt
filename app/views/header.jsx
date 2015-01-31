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
        <span>{ this.state.unread } unread</span>
      )

    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Emailz</a>

            <ul id="nav-mobile" className="right side-nav">
              <li>
                <a>
                  { unread }
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
