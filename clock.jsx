import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }
  componentDidMount(){
    this.intervalId = setInterval(this.tick, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  tick(){
    this.setState({time:new Date()});
  }
  render(){
    let time = this.state.time;
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hr = hr < 10 ? `0${hr}` : hr;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    return(
      <div>
        <h1>Clock</h1>
        <div className='clock'>
          <p>
            <span>Time: </span>
            <span>{hr} : {min} : {sec}</span>
          </p>
          <p>
            <span>Date:</span>
            <span>{this.state.time.toDateString()}</span> 
          </p>
        </div>
      </div>
    );
  }
}

export default Clock;
