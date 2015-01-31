/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
  render: function() {
    return (
      <ul className="collection">
        <li className="collection-item">
          <a href="#!">
            <i className="fa fa-inbox"></i>
            Inbox
          </a>
          <a>
            <span className="badge new">2</span>
          </a>
        </li>
      </ul>
    )
  }
})
