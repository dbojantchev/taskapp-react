'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = _react2.default.createClass({
    displayName: 'Header',

    render: function render() {

        var style1 = {
            color: 'white',
            paddingLeft: '20px'
        };

        var style2 = {
            float: "left",
            width: "40%"
        };

        return _react2.default.createElement(
            'div',
            { id: this.props.id, className: 'navbar navbar-inverse navbar-fixed-top', role: 'navigation', style: style1 },
            _react2.default.createElement(
                'div',
                { style: style2 },
                _react2.default.createElement(
                    'h3',
                    { style: { marginTop: "10px" } },
                    this.props.name
                )
            ),
            this.props.contents
        );
    }
});

exports.default = Header;