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
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
    //your code here
  }

  //your code here
  setNum1(e){
    console.log(e.target.value)
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({Num1:num1});
  }

  setNum2(e){
    const num2= e.target.value ? parseInt(e.target.value) : "";
    this.setState({Num2:num2});
  }

  add(e){
    e.preventDefault();
    let result = this.state.Num1 + this.state.Num2;
    this.setState({result});
  }

  substract(e){
    e.preventDefault();
    let result = this.state.Num1 - this.state.Num2;
    this.setState({result});
  }

  multiply(e){
    e.preventDefault();
    let result = this.state.Num1 * this.state.Num2;
    this.setState({result});
  }

  divide(e){
    e.preventDefault();
    let result = this.state.Num1 / this.state.Num2;
    this.setState({result});
  }

  clear(e){
    e.preventdefault();
    this.setState({
      result: 0,
      Num1:'',
      Num2:''
    });
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
          <button onClick = {this.add}>+</button>
          <button onClick = {this.substract}>-</button>
          <button onClick = {this.multiply}>*</button>
          <button onClick = {this.divide}>/</button>
          <button onClick = {this.clear}>clear</button>

      </div>
    );
  }
}

export default Calculator;
