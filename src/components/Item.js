import React, { Component } from 'react';

class Item extends Component {
    render() {
        return(
            <span>
                {this.props.item.item} : {this.props.shouldDiscount ? (this.props.item.price *(1-this.props.item.discount)) : this.props.item.price }
            $</span>
        )

    }
}

export default Item