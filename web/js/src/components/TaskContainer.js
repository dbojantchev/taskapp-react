'use strict'

import React from 'react';
import Task from './Task';

class TaskContainer extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            tasks: []
        }

    }

    componentDidMount() {
        $.ajax({
            url: '/api/getTasks',
            type: "POST",
            dataType: 'json',
            data:{},
            cache: false,
            success: function (data) {
                this.setState({tasks: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    render() {

        let style1 = {};
        let tasksJSX = [];

        if(this.state.tasks.rows) {
            this.state.tasks.rows.forEach(function (task) {
                tasksJSX.push(<Task key={ task.id } task={ task }></Task>);
            });
        }

        return <table id="catalogTable" width="100%" className="order-column table  table-striped table-hover" cellSpacing={0}>
                <thead>
                <tr>
                    <th><a href="javascript:void(0)" ng-click="sort('id')">Id</a>
                            <span ng-class="sortDir === 'ASC' ? 'sortIndicator glyphicon glyphicon-circle-arrow-up': 'sortIndicator glyphicon glyphicon-circle-arrow-down' "
                                  ng-show="sortCol === 'id'"></span>
                    </th>
                    <th><a href="javascript:void(0)" ng-click="sort('title')">Title</a>
                            <span ng-class="sortDir === 'ASC' ? 'sortIndicator glyphicon glyphicon-circle-arrow-up': 'sortIndicator glyphicon glyphicon-circle-arrow-down' "
                                  ng-show="sortCol === 'title'"></span>
                    </th>
                    <th><a href="javascript:void(0)" ng-click="sort('description')">Description</a>
                            <span ng-class="sortDir === 'ASC' ? 'sortIndicator glyphicon glyphicon-circle-arrow-up': 'sortIndicator glyphicon glyphicon-circle-arrow-down' "
                                  ng-show="sortCol === 'description'"></span>
                    </th>
                    <th><a href="javascript:void(0)" ng-click="sort('priority')">Priority</a>
                            <span ng-class="sortDir === 'ASC' ? 'sortIndicator glyphicon glyphicon-circle-arrow-up': 'sortIndicator glyphicon glyphicon-circle-arrow-down' "
                                  ng-show="sortCol === 'priority'"></span>
                    </th>
                    <th><a href="javascript:void(0)" ng-click="sort('create_dt')">Create Date</a>
                            <span ng-class="sortDir === 'ASC' ? 'sortIndicator glyphicon glyphicon-circle-arrow-up': 'sortIndicator glyphicon glyphicon-circle-arrow-down' "
                                  ng-show="sortCol === 'create_dt'"></span>
                    </th>
                    <th><a href="javascript:void(0)" ng-click="sort('status')">Status</a>
                            <span ng-class="sortDir === 'ASC' ? 'sortIndicator glyphicon glyphicon-circle-arrow-up': 'sortIndicator glyphicon glyphicon-circle-arrow-down' "
                                  ng-show="sortCol === 'status'"></span>
                    </th>
                    <th>Toggle Complete</th>
                </tr>
                </thead>
                <tbody>
                    {tasksJSX}
                </tbody>
                </table>;

    }
}
;

export default TaskContainer
