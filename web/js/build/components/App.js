'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _TaskContainer = require('./TaskContainer');

var _TaskContainer2 = _interopRequireDefault(_TaskContainer);

var _Task = require('./Task');

var _Task2 = _interopRequireDefault(_Task);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = _react2.default.createClass({
    displayName: 'App',

    render: function render() {
        var contents = _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'ul',
                { className: 'nav navbar-nav navbar-right' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '/#/home' },
                        'Home'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { 'data-placement': 'top', 'data-toggle': 'tooltip', title: 'Logout' },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:void(null)', onClick: window.taskapp.signout, 'data-title': 'Logout' },
                        _react2.default.createElement('i', { className: 'glyphicon glyphicon-log-out' }),
                        ' Logout'
                    )
                )
            )
        );

        return _react2.default.createElement(_Header2.default, { id: 'header1', name: 'Task List', contents: contents });
    }
});

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("nav"));

var TaskContainer1 = _reactDom2.default.render(_react2.default.createElement(_TaskContainer2.default, null), document.getElementById("taskContainer"));

exports.default = App;