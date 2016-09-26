'use strict'

import React from 'react';
import NameValue from './NameValue';

class Tile extends React.Component {

    constructor(){
        super(...arguments);

    }
    render () {

        let style1 = {};

        var nameValuesJSX = [];

        var data = this.props.data;

        if(this.props.data) {
            let data = this.props.data;
            Object.keys(this.props.data).forEach(function (key) {
                nameValuesJSX.push(<NameValue name={ key } key={key} value={ data[key] }></NameValue>);
            });
        }

        return <div className="tile" style={style1}>
                        {nameValuesJSX}
                </div>;

    }
};

export default Tile
