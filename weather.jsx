import React from 'react';

export default class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {weather: null};
  }
  // bb3d1ccf2823dbd16d3738742b9a13d9
  // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
  // http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.success);
  }
  success(pos){
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    let request = new XMLHttpRequest();
    let url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
    request.open('GET',url, true);
    request.onload = function(){
      if(request.status >= 200 && request.status < 400) {
        let weather = JSON.parse(request.responseText);
        this.setState({weather});
      } else {
        alert('failed to get weather API');
      }
    };
  }
  render(){
    return(
    <div>
      <p>Mountain View Weather</p>
      <p>{this.state.weather}</p>
    </div>
  );
  }
}
