import React, { Component } from 'react';
import axios from 'axios';

class RecourceList extends Component {
  state = { recources: [] }

  async componentDidMount() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.recource}`);
    this.setState({ recources: response.data});
  }

  async componentDidUpdate(pervProps) {
    if(pervProps.recource !== this.props.recource){
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.recource}`);
      this.setState({ recources: response.data});
    }
  }

  render(){
    return(
      <div>
        {this.state.recources.length}
      </div>
    );
  }
}

export default RecourceList;
