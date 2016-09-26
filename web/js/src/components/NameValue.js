'use strict'

import React from 'react';

class NameValue extends React.Component {

    constructor(){
        super(...arguments);

    }

    render () {

        let style1 = {};

        return <div className="name-value" style={style1}>
                            <label>{this.props.name}:&nbsp;</label>
                            <span>{this.props.value}</span>
                </div>;

    }
};

export default NameValue
