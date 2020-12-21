import React, { Component } from 'react';


class SubCompany extends Component {
  render() {
    return <h4>{this.props.name} {this.props.revenue}</h4>
  }
}

export default SubCompany