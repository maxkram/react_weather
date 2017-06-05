var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
      <h3>Сегодня в г. {location} {temp} градусов в тени</h3>
    )
  };

module.exports = WeatherMessage;
