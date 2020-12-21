import React, { Component } from 'react';

class Hudini extends Component {
    constructor() {
        super()
        this.state= {
            show : false
        }
    }
    render() {
        return this.state.show ? <span>Now you see me</span> : <span>Now you don't</span>
            
        

    }
}

export default Hudini