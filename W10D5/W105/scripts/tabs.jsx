import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabs: 0
    };
    this.mapping = this.mapping.bind(this);
    this.selectTabs = this.selectTabs.bind(this);
  }

  selectTabs(e) {
    if (e.target !== this.state.selectedTabs) {
      this.setState({selectedTabs: e.target.value})
      console.log(e.target.value);
    }
  }

  mapping() {
    return this.props.tabs.map((tab, i) => {
      return <li onClick={this.selectTabs} key={i} value={i + 1}>{tab.title}</li>
    })
  }

  render() {
    return (
      <ul>
        {this.mapping()}
      </ul>
    )
  }
}

export default Tabs;