var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var {temp, location} = this.props;
    return (
      <h3>Сегодня в г. {location} {temp} градусов в тени</h3>
    )
  }
});

module.exports = WeatherMessage;
