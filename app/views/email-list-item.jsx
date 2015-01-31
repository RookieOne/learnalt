/** @jsx React.DOM */
var React = require('react/addons')
var EmailActions = require("../actions/email-actions.js")

module.exports = React.createClass({
  selectEmail: function() {
    EmailActions.selectEmail(this.props.email)
  },
  render: function() {
    var classes = React.addons.classSet({
      'collection-item': true,
      "row": true,
      "valign-wrapper": true,
      'unread': this.props.email.unread,
      "open": this.props.email.open
    })

    var imgSrc = "/images/" + this.props.email.image

    return (
      <li className={classes} onClick={this.selectEmail}>
        <div className="col s2">
          <img src={imgSrc} className="circle responsive-img"></img>
        </div>
        <div className="col s10">
          <div className="from">{ this.props.email.from }</div>
          <div className="subject">{ this.props.email.subject }</div>
          <div className="preview-text">{ this.props.email.previewText }</div>
        </div>
      </li>
    )
  }
})
