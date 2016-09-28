'use strict'

import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Menu from './Menu';
import TaskContainer from './TaskContainer';
import Task from './Task';
import store from '../store';

var App = React.createClass({
    render: function () {
        var contents=
            <div>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="/#/home">Home</a>
                    </li>
                    <li data-placement="top" data-toggle="tooltip" title="Logout">
                        <a href="javascript:void(null)" onClick={ window.taskapp.signout } data-title="Logout"><i className="glyphicon glyphicon-log-out" /> Logout</a>
                    </li>
                </ul>
            </div>;

        return <Header id="header1" name="Task List" contents={contents}></Header>;
    }
});

ReactDom.render(
    <App/>,
    document.getElementById("nav")
);

var TaskContainer1 = ReactDom.render(
    <TaskContainer/>,
    document.getElementById("taskContainer")
);


export default App
