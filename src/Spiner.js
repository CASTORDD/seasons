import React from 'react'

const Spiner = ( props ) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        { props.message || 'Loading...'}
      </div>
    </div>
  );
}

Spiner.defaultProps = {
  message: 'Loading...'
}

export default Spiner;