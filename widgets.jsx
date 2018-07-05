import React from 'react';
import Clock from './clock';
import Tab from './tab';

const Panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

class Widget extends React.Component {
  render(){
    return(
      <div>
      <Clock />
      <Tab panes={Panes}/>
      </div>
    );
  }
}

export default Widget;
