import React from 'react';

export default class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {weather: null};
    this.success = this.success.bind(this);
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
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=bb3d1ccf2823dbd16d3738742b9a13d9`;
    request.open('GET',url, true);
    request.onload = () => {
      if(request.status >= 200 && request.status < 400) {
        let weather = JSON.parse(request.responseText);
        this.setState({weather});
      } else {
        alert('failed to get weather API');
      }
    };
    request.send();
  }
  render(){
    let content = <div></div>;
    if(this.state.weather){
      let weather = this.state.weather;
      let temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div>
        <p>{weather.name}</p>
        <p>{temp.toFixed(1)} degrees</p>
      </div>;

    }
    return(
    <div>
      <p>Mountain View Weather</p>
      <p>{content}</p>
    </div>
  );
  }
}
