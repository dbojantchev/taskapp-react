'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Task = require('./Task');

var _Task2 = _interopRequireDefault(_Task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TaskContainer = function (_React$Component) {
    _inherits(TaskContainer, _React$Component);

    function TaskContainer() {
        _classCallCheck(this, TaskContainer);

        var _this = _possibleConstructorReturn(this, (TaskContainer.__proto__ || Object.getPrototypeOf(TaskContainer)).apply(this, arguments));

        _this.state = {
            tasks: []
        };

        return _this;
    }

    _createClass(TaskContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            $.ajax({
                url: '/api/getTasks',
                type: "POST",
                dataType: 'json',
                data: {},
                cache: false,
                success: function (data) {
                    this.setState({ tasks: data });
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var style1 = {};
            var tasksJSX = [];

            if (this.state.tasks.rows) {
                this.state.tasks.rows.forEach(function (task) {
                    tasksJSX.push(_react2.default.createElement(_Task2.default, { key: task.id, task: task }));
                });
            }

            return _react2.default.createElement(
                'table',
                { id: 'catalogTable', width: '100%', className: 'order-column table  table-striped table-hover', cellSpacing: 0 },
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:void(0)', 'ng-click': 'sort(\'id\')' },
                                'Id'
                            ),
                            _react2.default.createElement('span', { 'ng-class': 'sortDir === \'ASC\' ? \'sortIndicator glyphicon glyphicon-circle-arrow-up\': \'sortIndicator glyphicon glyphicon-circle-arrow-down\' ',
                                'ng-show': 'sortCol === \'id\'' })
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:void(0)', 'ng-click': 'sort(\'title\')' },
                                'Title'
                            ),
                            _react2.default.createElement('span', { 'ng-class': 'sortDir === \'ASC\' ? \'sortIndicator glyphicon glyphicon-circle-arrow-up\': \'sortIndicator glyphicon glyphicon-circle-arrow-down\' ',
                                'ng-show': 'sortCol === \'title\'' })
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:void(0)', 'ng-click': 'sort(\'description\')' },
                                'Description'
                            ),
                            _react2.default.createElement('span', { 'ng-class': 'sortDir === \'ASC\' ? \'sortIndicator glyphicon glyphicon-circle-arrow-up\': \'sortIndicator glyphicon glyphicon-circle-arrow-down\' ',
                                'ng-show': 'sortCol === \'description\'' })
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:void(0)', 'ng-click': 'sort(\'priority\')' },
                                'Priority'
                            ),
                            _react2.default.createElement('span', { 'ng-class': 'sortDir === \'ASC\' ? \'sortIndicator glyphicon glyphicon-circle-arrow-up\': \'sortIndicator glyphicon glyphicon-circle-arrow-down\' ',
                                'ng-show': 'sortCol === \'priority\'' })
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:void(0)', 'ng-click': 'sort(\'create_dt\')' },
                                'Create Date'
                            ),
                            _react2.default.createElement('span', { 'ng-class': 'sortDir === \'ASC\' ? \'sortIndicator glyphicon glyphicon-circle-arrow-up\': \'sortIndicator glyphicon glyphicon-circle-arrow-down\' ',
                                'ng-show': 'sortCol === \'create_dt\'' })
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: 'javascript:void(0)', 'ng-click': 'sort(\'status\')' },
                                'Status'
                            ),
                            _react2.default.createElement('span', { 'ng-class': 'sortDir === \'ASC\' ? \'sortIndicator glyphicon glyphicon-circle-arrow-up\': \'sortIndicator glyphicon glyphicon-circle-arrow-down\' ',
                                'ng-show': 'sortCol === \'status\'' })
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Toggle Complete'
                        )
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    tasksJSX
                )
            );
        }
    }]);

    return TaskContainer;
}(_react2.default.Component);

;

exports.default = TaskContainer;