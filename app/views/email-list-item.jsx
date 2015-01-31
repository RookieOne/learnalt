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
          <div className="from">John Smith (jsmith@gmail.com)</div>
          <div className="subject">Good news everyone!</div>
          <div className="preview-text">You are now worth more dead than alive! So for...</div>
        </div>
      </li>
    )
  }
})

//
//   <li className="collection-item row valign-wrapper z-depth-3">
//     <div className="col s2">
//       <img src="http://placehold.it/150x150" className="circle responsive-img"></img>
//     </div>
//     <div className="col s10">
//       <div className="from">John Smith (jsmith@gmail.com)</div>
//       <div className="subject">Good news everyone!</div>
//       <div className="preview-text">You are now worth more dead than alive! So for...</div>
//     </div>
//   </li>
//   <li className="collection-item row valign-wrapper unread">
//     <div className="col s2">
//       <img src="http://placehold.it/150x150" className="circle responsive-img"></img>
//     </div>
//     <div className="col s10">
//       <div className="from">John Smith (jsmith@gmail.com)</div>
//       <div className="subject">Good news everyone!</div>
//       <div className="preview-text">You are now worth more dead than alive! So for...</div>
//     </div>
//   </li>
//   <li className="collection-item row valign-wrapper unread">
//     <div className="col s2">
//       <img src="http://placehold.it/150x150" className="circle responsive-img"></img>
//     </div>
//     <div className="col s10">
//       <div className="from">John Smith (jsmith@gmail.com)</div>
//       <div className="subject">Good news everyone!</div>
//       <div className="preview-text">You are now worth more dead than alive! So for...</div>
//     </div>
//   </li>
// </ul>
