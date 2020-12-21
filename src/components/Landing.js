import React, { Component } from 'react';

class Landing extends Component {
    /* your code here */


    render() {
        return (
            <div>
                Welcome, {this.props.user.user}. {this.props.user.item.item} for {this.props.user.item.price}$
            </div>
        )

    }
}

export default Landing