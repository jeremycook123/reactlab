import React, { Component } from 'react';
import axios from 'axios'

class Vote extends Component{
    constructor () {
      super();

      this.APIHOSTPORT = "localhost:8080";

      this.state = {
        vote: 0
      }
      
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
      var url = `http://${this.APIHOSTPORT}/languages/${this.props.id}/vote`;
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.get(url)
        .then(response => this.setState({vote: this.state.vote+1}))
    }

    render () {
      return (
        <div id={this.props.id}>
          <button className='button' onClick={this.handleClick} type="button" class="btn btn-outline-success">+1</button>
          <div>
            <b>Votes</b>: {this.state.vote}
          </div>
        </div>
      )
    }
  }

  export default Vote;