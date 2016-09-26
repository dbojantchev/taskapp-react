'use strict'

import React from 'react';

var Menu = React.createClass({
    render: function() {

        var menuDescription = this.props.menuDescripion;
        var menuItems = menuDescription.items;
        var buttons = [];
        for (var i = 0; i < menuItems.length; i++) {
            buttons.push(<button key={menuItems[i].id} className="dropdown-item" type="button" onClick={menuItems[i].callback.bind(null, menuItems[i])}>{menuItems[i].title}</button>);
        }

        return (
            <div className="dropdown" style={menuDescription.style}>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    { menuDescription.name }
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    { buttons }
                </div>
            </div>
        );
    }
});

export default Menu
