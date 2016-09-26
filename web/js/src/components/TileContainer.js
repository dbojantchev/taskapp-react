'use strict'

import React from 'react';
import Tile from './Tile';

class TileContainer extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            data: []
        }

    }

    componentDidMount() {

        if(this.props.url) {

            $.ajax({
                url: this.props.url,
                dataType: 'json',
                cache: false,
                success: function (data) {
                    this.setState({data: data});
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        }
    }

    render() {

        let style1 = {};
        let cardsJSX = [];

        this.state.data.forEach(function (item){
            cardsJSX.push(<Tile key={ Math.random() } data={ item }></Tile>);
        });

        return <div className="tile-container col-xs-4" style={style1}>
            {cardsJSX}
        </div>;

    }
}
;

export default TileContainer
