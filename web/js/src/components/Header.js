'use strict'

import React from 'react';

var Header = React.createClass({
    render: function () {

        var style1 = {
            color: 'white',
            paddingLeft: '20px'
        };

        var style2 = {
            float:"left",
            width:"40%"
        };

        return <div id={this.props.id} className="navbar navbar-inverse navbar-fixed-top" role="navigation" style={style1}>
            <div style={style2}>
                <h3 style={ {marginTop: "10px" }}>
                    {this.props.name}
                </h3>
            </div>
            {this.props.contents}
        </div>;

    }
});

export default Header
