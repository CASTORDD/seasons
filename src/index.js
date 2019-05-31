import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  
  state = {
    lat: null,
    long: null,
    errorMessages: ''
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      },
      (err) => {
        this.setState({
          errorMessages: err.message
        })
      }
    );
  }

  // React says we have to define render!
  render(){
    if( this.state.errorMessages && !this.state.lat ){
      return <div>Error: { this.state.errorMessages }</div>
    }

    if( !this.state.errorMessages && this.state.lat ){
      return <SeasonDisplay lat={ this.state.lat } long={ this.state.long } />
    }
    return <div>Loading!</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);