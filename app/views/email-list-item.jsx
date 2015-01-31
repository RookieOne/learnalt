/** @jsx React.DOM */
var React = require('react/addons')

module.exports = React.createClass({
  render: function() {
    var classes = React.addons.classSet({
      'collection-item': true,
      "row": true,
      "valign-wrapper": true,
      'unread': this.props.email.unread,
      "open": this.props.email.open
    })

    return (
      <li className={classes}>
        <div className="col s2">
          <img src="http://placehold.it/150x150" className="circle responsive-img"></img>
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
