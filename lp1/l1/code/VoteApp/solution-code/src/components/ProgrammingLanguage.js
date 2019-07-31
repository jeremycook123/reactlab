import React, { Component } from 'react';
import Vote from './Vote';
import axios from 'axios';

class ProgrammingLanguage extends Component {
    constructor () {
      super();

      this.state = {
        language: {},
        loaded: false
      }
    }

    componentDidMount () {
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.get(`http://localhost:8080/languages/${this.props.id}`).then(
        response => this.setState({
          language: response.data,
          loaded: true
        })
      );
    }

    render () {
      if (this.state.loaded) {
        var usecase = this.state.language.codedetail.usecase;
        var rank = this.state.language.codedetail.rank;
        var homepage = this.state.language.codedetail.homepage;

        return (
          <div class="container">
            <h2>{this.props.name}</h2>
            <p><Vote id={this.props.id}/></p>
  
            <p><b>Uses</b>: {usecase}</p>
            <p><b>Rank</b>: {rank}</p>
            <p><b>Homepage</b>: {homepage}</p>
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="parent">
                    <img src={"./img/" + this.props.logo} alt="logo" class="center-block"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      return <div></div>;
    }
  }

  export default ProgrammingLanguage;