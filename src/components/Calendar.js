import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
        {this.props.calendar.map(v => <div  key={v.day+v.time}>{v.day} @ {v.time}</div>)}
      </div>
    )
  }
}

export default Calendar