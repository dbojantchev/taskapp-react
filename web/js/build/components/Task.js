'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = function (_React$Component) {
    _inherits(Task, _React$Component);

    function Task() {
        _classCallCheck(this, Task);

        return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
    }

    _createClass(Task, [{
        key: 'toggleCompleted',
        value: function toggleCompleted(ev) {
            this.props.task.status = this.props.task.status === 0 ? 1 : 0;
            //this.props.markComplete(this.props.task);     /* DIRECT INVOCATION */
            _store2.default.dispatch({ type: 'TOGGLED_TASK_COMPLETION', task: this.props.task });
        }
    }, {
        key: 'render',
        value: function render() {

            var task = this.props.task;

            return _react2.default.createElement(
                'tr',
                { id: 'task{{task.id}}row', className: '{completed }' },
                _react2.default.createElement(
                    'td',
                    null,
                    task.id
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    task.title
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    task.description
                ),
                _react2.default.createElement(
                    'td',
                    { style: { textAlign: 'center' } },
                    task.priority
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    task.create_dt
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    task.status === 0 ? 'Incomplete' : 'Complete',
                    ' '
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement('input', { id: 'markComplete{task.id}', type: 'checkbox', checked: task.status > 0 ? "checked" : "", style: { marginLeft: '30px' },
                        onClick: this.toggleCompleted.bind(this), 'data-id': task.id })
                )
            );
        }
    }]);

    return Task;
}(_react2.default.Component);

;

exports.default = Task;