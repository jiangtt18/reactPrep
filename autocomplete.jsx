import React from 'react';

export default class AutoComplete extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputVal: ''
    };
    this.handClick = this.handleClick.bind(this);
  }

  updateFields(e){
    this.setState({inputVal:e.currentTarget.value});
  }



  matches(){
    let matches = [];
    if(this.state.inputVal.length === 0) {
      return this.props.names;
    }
    this.props.names.forEach(name => {
      let sub = name.slice(0, this.state.inputVal.length);
      if(sub.toLowerCase === this.state.inputVal.toLowerCase()){
        matches.push(name);
      }
    });
    if(matches.length === 0) {
      matches.push('No matches');
    }
    return matches;
  }
  selectName(e){
    this.setState({inputVal:e.currentTarget.innerText});
  }

  render(){
    let results = this.matches().map((result, i) =>{
      return(
        <li key={i}
          onClick={this.selectName}>{result}</li>
      );
    });
    return(
      <div>
      <input
        onChange={this.updateFields}
        value = {this.state.inputVal}>
      </input>
      <ul>
        {results}
      </ul>
      </div>
    );
  }
}
