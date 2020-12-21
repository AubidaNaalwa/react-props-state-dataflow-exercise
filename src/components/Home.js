import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return (<div>
                <div>
                    Store
                </div>
                { this.props.store.map(v =><div>
                    <Item item = {v} shouldDiscount = {this.props.shouldDiscount}/>
                </div> )}
           
            </div>)
    }
}

export default Home