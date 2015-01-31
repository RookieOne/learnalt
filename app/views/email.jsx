/** @jsx React.DOM */
var React = require('react')

module.exports = React.createClass({
  render: function() {
    return (
      <div id="email">
        <div className="from">John Smith (jsmith@gmail.com)</div>
        <div className="subject">Good news everyone!</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit lorem in interdum ultrices. Ut aliquet egestas lectus a condimentum. Proin aliquam eleifend auctor. Integer in ultricies nunc. Vivamus feugiat enim gravida blandit accumsan. Proin ut metus odio. Aenean mattis, metus vel tincidunt aliquet, dui enim tempor felis, et gravida libero dolor vel purus. Mauris arcu nisl, varius pharetra scelerisque non, efficitur vel ipsum. Nulla pretium justo vel erat dignissim aliquet. Nulla facilisi. Integer lacinia lorem consequat maximus cursus. Fusce mollis magna sit amet risus pharetra blandit. Suspendisse potenti. Nunc laoreet urna non magna efficitur, ut elementum nulla pellentesque. In hac habitasse platea dictumst. Pellentesque dapibus suscipit elit, eget sollicitudin arcu viverra non.
        </p>
      </div>
    )
  }
})
