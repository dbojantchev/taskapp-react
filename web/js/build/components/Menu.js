'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = _react2.default.createClass({
    displayName: 'Menu',

    render: function render() {

        var menuDescription = this.props.menuDescripion;
        var menuItems = menuDescription.items;
        var buttons = [];
        for (var i = 0; i < menuItems.length; i++) {
            buttons.push(_react2.default.createElement(
                'button',
                { key: menuItems[i].id, className: 'dropdown-item', type: 'button', onClick: menuItems[i].callback.bind(null, menuItems[i]) },
                menuItems[i].title
            ));
        }

        return _react2.default.createElement(
            'div',
            { className: 'dropdown', style: menuDescription.style },
            _react2.default.createElement(
                'button',
                { className: 'btn btn-secondary dropdown-toggle', type: 'button', id: 'dropdownMenu2', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
                menuDescription.name
            ),
            _react2.default.createElement(
                'div',
                { className: 'dropdown-menu', 'aria-labelledby': 'dropdownMenu2' },
                buttons
            )
        );
    }
});

exports.default = Menu;