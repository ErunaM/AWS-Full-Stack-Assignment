import React,{ Component } from 'react';
import Background from './climate-change.jpg';
const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover'
};

export default class Home extends Component {

  render(){
    return(
      <div style={divStyle}>
        <div style={{paddingLeft: '40%', color: 'white'}}>
          <h1 style={{margin: '0'}}>
            Welcome!
          </h1>
          <p>Click on "Graph"</p>
          <p>Select a location</p>
          <p>Select a start data and end date </p>
          <p>Click on "Plot Graph"</p>


        </div>
      </div>
    );
  }

}
