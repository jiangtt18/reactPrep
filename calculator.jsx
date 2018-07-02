import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result:0,
      Num1:'',
      Num2:'',
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum1.bind(this);
    //your code here
  }

  //your code here
  setNum1(e){
    e.preventdefault();
    const num1 = e.target.value ? parseInt(e.targe.value) : "";
    this.setState({Num1:num1});
  }

  setNum2(e){
    e.preventdefault();
    const num2= e.target.value ? parseInt(e.targe.value) : "";
    this.setState({Num2:num2});
  }

  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input
          onChange = {this.setNum1}
          value = {this.state.Num1}/>
          <input
            onChange = {this.setNum2}
            value = {this.state.Num2}/>
        //your code will replace this
      </div>
    );
  }
}

export default Calculator;
