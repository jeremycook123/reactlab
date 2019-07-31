import React, { Component } from 'react';
//CODE5: import the Vote class to provide voting feature
import axios from 'axios';

class ProgrammingLanguage extends Component {
  constructor () {
    super();

    //CODE6: configure the APIHOSTPORT, this should be the public IP address of the host that the API server is running on

    this.state = {
      language: {},
      loaded: false
    }
  }

  componentDidMount () {
    //CODE7: provide implementation to request language details for current language from the API server

  }

  render () {
    //CODE8: provide implementation for the render function to render the HTML for the ProgrammingLanguage component

  }
}

//CODE9: export the ProgrammingLanguage class, allows the VoteApp component to import it
