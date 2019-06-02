import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spiner from './Spiner'

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

  renderContent(){
    if( this.state.errorMessages && !this.state.lat ){
      return <div>Error: { this.state.errorMessages }</div>
    }

    if( !this.state.errorMessages && this.state.lat ){
      return <SeasonDisplay lat={ this.state.lat } long={ this.state.long } />
    }
    return <Spiner message="Please accept location request" />;
  }

  // React says we have to define render!
  render(){
    return(
      <div className="border red">
        { this.renderContent() }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);