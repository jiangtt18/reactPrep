import React from 'react';
import Clock from './clock';
import Tab from './tab';
import Weather from './weather';
import AutoComplete from './autocomplete';

const Panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

const Names = ["Apple", "Barry", "Cats", "Crazy", "Friends", "Get"];

class Widget extends React.Component {
  render(){
    return(
      <div>
      <Clock />
      <Tab panes={Panes}/>
      <Weather />
      <AutoComplete names={Names}/>
      </div>
    );
  }
}

export default Widget;
