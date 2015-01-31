/** @jsx React.DOM */
var React = require('react')
var Header = require("./header.jsx")
var InboxNavigation = require("./inbox-navigation.jsx")
var NewMessageButton = require("./new-message-button.jsx")
var Emails = require("./emails.jsx")
var Email = require("./email.jsx")

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Header />

        <main>
          <div className="row">
            <div className="col s2">
              <InboxNavigation />
              <NewMessageButton />
            </div>
            <div className="col s4">
              <Emails />
            </div>
            <div className="col s6">
              <Email />
            </div>
          </div>
        </main>
      </div>
    )
  }
})
