import React from 'react';
class Headers extends React.Component {
  render(){
    let selected = this.props.selectedPane;
    let headers = this.props.panes.map((pane, index) => {
      let title = pane.title;
      let klass='';
      if(index === selected) {
        klass = 'active';
      }
      return (
        <li
          key={index}
          className={klass}
          onClick={this.props.onTabChosen.bind(null,index)}>
          {title}{' '}
        </li>
      );
    });

    return (
      <ul className='tab-header'>
        {headers}
      </ul>
    );
  }
}
export default class Tab extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedPane: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num){
    this.setState({selectedPane: num});
  }


  render(){
    let pane = this.props.panes[this.state.selectedPane];
    return(
      <div>
        <h1>Tabs</h1>
        <div className='tabs'>
            <Headers
              slelectedPane={this.state.seelctedPane}
              onTabChosen={this.selectTab}
              panes={this.props.panes}
              >
            </Headers>
            <div>
              <article>{pane.content}</article>
            </div>
        </div>
      </div>
    );
  }
}
