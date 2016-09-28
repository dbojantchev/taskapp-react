'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Task = require('./Task');

var _Task2 = _interopRequireDefault(_Task);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

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
            tasks: [],
            showCompleted: false,
            modalIsOpen: false,

            newTitle: 'Hahahaha',
            newDescription: 'asdasdasd',
            newPriority: '23'
        };

        _this.sortCol = 'id';
        _this.sortDir = 'ASC';
        return _this;
    }

    _createClass(TaskContainer, [{
        key: 'sort',
        value: function sort(ev) {
            if (this.sortCol === ev.currentTarget.dataset.id) {
                this.sortDir = this.sortDir === 'ASC' ? 'DESC' : 'ASC';
            } else {
                this.sortCol = ev.currentTarget.dataset.id;
                this.sortDir = 'ASC';
            }

            this.getTasks();
        }
    }, {
        key: 'updateTask',
        value: function updateTask(task) {
            var getTasks = this.getTasks.bind(this);
            $.ajax({
                url: '/api/updateTask',
                type: "POST",
                dataType: 'json',
                data: task,
                cache: false,
                success: function (data) {
                    getTasks();
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        }
    }, {
        key: 'saveTask',
        value: function saveTask(task) {
            var getTasks = this.getTasks.bind(this);

            var task = {};
            task.title = this.state.newTitle;
            task.description = this.state.newDescription;
            task.priority = this.state.newPriority;
            task.status = 0;

            $.ajax({
                url: '/api/saveTask',
                type: "POST",
                dataType: 'json',
                data: task,
                cache: false,
                success: function (data) {
                    getTasks();
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        }
    }, {
        key: 'markComplete',
        value: function markComplete(task) {
            this.updateTask(task);
        }
    }, {
        key: 'getTasks',
        value: function getTasks() {
            var that = this;

            var cond = {};
            cond.sort = {};
            cond.sort.sortCol = this.sortCol;
            cond.sort.sortDir = this.sortDir;

            $.ajax({
                url: '/api/getTasks',
                type: "POST",
                dataType: 'json',
                data: JSON.stringify(cond),
                cache: false,
                success: function (data) {
                    that.setState({ tasks: data });
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        }
    }, {
        key: 'toggleShowCompleted',
        value: function toggleShowCompleted() {
            this.setState({ showCompleted: arguments[0].target.checked });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.redux_unsubscribe = _store2.default.subscribe(function () {
                var state = _store2.default.getState(),
                    that = _this2;

                if (state.type === 'TOGGLED_TASK_COMPLETION') {
                    console.log('TOGGLED_TASK_COMPLETION');
                    _this2.markComplete(state.task);
                } else {
                    console.log('Unknown state: ' + state.type);
                }
            });

            this.getTasks();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.redux_unsubscribe();
        }
    }, {
        key: 'showAddTaskModal',
        value: function showAddTaskModal() {
            $('#addTask').modal('show');
        }
    }, {
        key: 'saveNewTask',
        value: function saveNewTask() {
            $('#addTask').modal('hide');
            this.saveTask();
        }
    }, {
        key: 'handleChangeTitle',
        value: function handleChangeTitle(event) {
            this.setState({ title: event.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var tasksJSX = [];
            var markComplete = this.markComplete;
            var that = this;

            if (this.state.tasks.rows) {
                this.state.tasks.rows.forEach(function (task) {
                    if (that.state.showCompleted || task.status === 0) {
                        tasksJSX.push(_react2.default.createElement(_Task2.default, { key: task.id, task: task, markComplete: markComplete.bind(that) }));
                    }
                });
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'task-header' },
                    _react2.default.createElement(
                        'div',
                        { className: 'pull-left' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'pull-left' },
                            'Tasks'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'add-task-div pull-left' },
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-default',
                                onClick: this.showAddTaskModal.bind(this) },
                            'Add Task'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'pull-right show-completed' },
                        _react2.default.createElement(
                            'label',
                            null,
                            'Show Completed'
                        ),
                        _react2.default.createElement('input', { type: 'checkbox', className: 'pull-right',
                            onClick: function onClick(event) {
                                return _this3.toggleShowCompleted(event);
                            } })
                    )
                ),
                _react2.default.createElement(
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
                                    { href: 'javascript:void(0)', onClick: this.sort.bind(this), 'data-id': 'id' },
                                    'Id'
                                ),
                                _react2.default.createElement('span', { className: (0, _classnames2.default)({ 'sortIndicator glyphicon glyphicon-circle-arrow-up': this.sortDir === 'ASC',
                                        'sortIndicator glyphicon glyphicon-circle-arrow-down': this.sortDir !== 'ASC',
                                        'hidden': this.sortCol !== 'id' }) })
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:void(0)', onClick: this.sort.bind(this), 'data-id': 'title' },
                                    'Title'
                                ),
                                _react2.default.createElement('span', { className: (0, _classnames2.default)({ 'sortIndicator glyphicon glyphicon-circle-arrow-up': this.sortDir === 'ASC',
                                        'sortIndicator glyphicon glyphicon-circle-arrow-down': this.sortDir !== 'ASC',
                                        'hidden': this.sortCol !== 'title' }) })
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:void(0)', onClick: this.sort.bind(this), 'data-id': 'description' },
                                    'Description'
                                ),
                                _react2.default.createElement('span', { className: (0, _classnames2.default)({ 'sortIndicator glyphicon glyphicon-circle-arrow-up': this.sortDir === 'ASC',
                                        'sortIndicator glyphicon glyphicon-circle-arrow-down': this.sortDir !== 'ASC',
                                        'hidden': this.sortCol !== 'description' }) })
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:void(0)', onClick: this.sort.bind(this), 'data-id': 'priority' },
                                    'Priority'
                                ),
                                _react2.default.createElement('span', { className: (0, _classnames2.default)({ 'sortIndicator glyphicon glyphicon-circle-arrow-up': this.sortDir === 'ASC',
                                        'sortIndicator glyphicon glyphicon-circle-arrow-down': this.sortDir !== 'ASC',
                                        'hidden': this.sortCol !== 'priority' }) })
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:void(0)', onClick: this.sort.bind(this), 'data-id': 'create_dt' },
                                    'Create Date'
                                ),
                                _react2.default.createElement('span', { className: (0, _classnames2.default)({ 'sortIndicator glyphicon glyphicon-circle-arrow-up': this.sortDir === 'ASC',
                                        'sortIndicator glyphicon glyphicon-circle-arrow-down': this.sortDir !== 'ASC',
                                        'hidden': this.sortCol !== 'create_dt' }) })
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:void(0)', onClick: this.sort.bind(this), 'data-id': 'status' },
                                    'Status'
                                ),
                                _react2.default.createElement('span', { className: (0, _classnames2.default)({ 'sortIndicator glyphicon glyphicon-circle-arrow-up': this.sortDir === 'ASC',
                                        'sortIndicator glyphicon glyphicon-circle-arrow-down': this.sortDir !== 'ASC',
                                        'hidden': this.sortCol !== 'status' }) })
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
                ),
                _react2.default.createElement(_Modal2.default, {
                    content: _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'modalHeader', style: { backgroundColor: "#006d9d" } },
                            _react2.default.createElement(
                                'button',
                                { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-hidden': 'true' },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove', 'aria-hidden': 'true', style: { color: "#fff" } })
                            ),
                            _react2.default.createElement(
                                'h4',
                                { className: 'modal-title custom_align', id: 'Heading', style: { color: "#fff" } },
                                'Add Task'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-body' },
                            _react2.default.createElement(
                                'form',
                                { acceptCharset: 'UTF-8', role: 'form' },
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'radio-inline' },
                                        'Title'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', onChange: function onChange(event) {
                                            return _this3.setState({ newTitle: event.target.value });
                                        }, placeholder: 'Title', value: this.state.newTitle })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'radio-inline' },
                                        'Description'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', onChange: function onChange(event) {
                                            return _this3.setState({ newDescription: event.target.value });
                                        }, placeholder: 'Description', value: this.state.newDescription })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'radio-inline' },
                                        'Priority (numeric)'
                                    ),
                                    _react2.default.createElement('input', { type: 'number', onChange: function onChange(event) {
                                            return _this3.setState({ newPriority: event.target.value });
                                        }, placeholder: 'Priority', value: this.state.newPriority })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-footer ' },
                            _react2.default.createElement(
                                'button',
                                { type: 'button', onClick: this.saveNewTask.bind(this), className: 'btn btn-default' },
                                _react2.default.createElement('span', { className: 'glyphicon glyphicon-ok', style: { color: "#7fb741" } }),
                                ' Ok '
                            )
                        )
                    )
                })
            );
        }
    }]);

    return TaskContainer;
}(_react2.default.Component);

;

exports.default = TaskContainer;