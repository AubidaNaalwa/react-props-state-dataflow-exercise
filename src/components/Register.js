import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (<div id="register">
      {this.props.register.map(v => <div key={v.day+v.time}>{v.name} has a reservation on{v.day} @ {v.time}</div>)}
    </div>)
  }
}

export default Register