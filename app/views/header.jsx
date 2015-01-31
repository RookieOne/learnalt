/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
  render: function() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Emailz</a>

            <ul id="nav-mobile" className="right side-nav">
              <li>
                <a>
                  <span>2 unread</span>
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
