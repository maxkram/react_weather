var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage  = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      location: "Tomsk",
      temp: 0
    }
  },
  handleSearch: function(location){
    this.setState({
      location: location,
      temp: 42
    });
  },
  render: function(){
    var{temp, location} = this.state;
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp}  location={location}/>
      </div>
    )
  }
});

module.exports = Weather;
