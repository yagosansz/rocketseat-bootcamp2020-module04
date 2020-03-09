import React, { Component, Fragment } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    })
  }

  handleDelete = tech => {
    this.setState({ 
      techs: this.state.techs.filter(t => t !== tech)
    })
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map(tech => 
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)} />
            )}
          </ul>
          <input 
            type="text" 
            onChange={this.handleInputChange} 
            value={this.state.newTech} 
          />
          <button type="submit">Submit</button>
        </form>
      </Fragment>
    )
  }
}

export default TechList;