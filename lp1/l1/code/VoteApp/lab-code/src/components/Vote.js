import React, { Component } from 'react';
import axios from 'axios'

class Vote extends Component{
  constructor () {
    super();

    //CODE1: configure the APIHOSTPORT, this should be the public IP address of the host that the API server is running on

    this.state = {
      vote: 0
    }
    
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    //CODE2: implement the handleClick function which will be called when the user clicks on the voting button
    //this invokes an AJAX request to the API to vote on the current programming language

  }

  render () {
    //CODE3: provide implementation for the render function to render the HTML for the Vote component

  }
}

//CODE4: export the Vote class, allows the ProgrammingLanguage component to import it
