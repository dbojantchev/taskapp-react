'use strict'

import React from 'react';
import ReactModal from 'react-modal';
import Modal from './Modal';
import Task from './Task';
import classNames from 'classnames';

class TaskContainer extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            tasks: [],
            showCompleted : false,
            modalIsOpen:false,

            newTitle : 'Hahahaha',
            newDescription : 'asdasdasd',
            newPriority : '23'
        };

        this.sortCol = 'id';
        this.sortDir = 'ASC';
    }

    sort (ev){
        if(this.sortCol === ev.currentTarget.dataset.id){
            this.sortDir = (this.sortDir === 'ASC') ? 'DESC' : 'ASC';
        } else {
            this.sortCol = ev.currentTarget.dataset.id;
            this.sortDir = 'ASC';
        }


        this.getTasks();
    }

    updateTask(task){
        var getTasks = this.getTasks.bind(this);
        $.ajax({
            url: '/api/updateTask',
            type: "POST",
            dataType: 'json',
            data:task,
            cache: false,
            success: function (data) {
                getTasks();
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    saveTask(task){
        var getTasks = this.getTasks.bind(this);

        var task = {};
        task.title          = this.state.newTitle;
        task.description    = this.state.newDescription;
        task.priority       = this.state.newPriority;
        task.status         = 0;

        $.ajax({
            url: '/api/saveTask',
            type: "POST",
            dataType: 'json',
            data:task,
            cache: false,
            success: function (data) {
                getTasks();
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    markComplete(task){
        this.updateTask(task);
    }

    getTasks(){
        let that = this;

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
                that.setState({tasks: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    toggleShowCompleted(){
        this.setState({showCompleted : arguments[0].target.checked})
    }

    componentDidMount() {
        this.getTasks();
    }

    showAddTaskModal(){
        $('#addTask').modal('show');
    }

    saveNewTask(){
        $('#addTask').modal('hide');
        this.saveTask();
    }

    handleChangeTitle (event) {
        this.setState({title: event.target.value});
    }

    render() {

        let tasksJSX = [];
        let markComplete = this.markComplete;
        let that = this;

        if(this.state.tasks.rows) {
            this.state.tasks.rows.forEach(function (task) {
                if(that.state.showCompleted || task.status === 0) {
                    tasksJSX.push(<Task key={ task.id } task={ task } markComplete={markComplete.bind(that)}></Task>);
                }
            });
        }

        return <div>
                <div className="task-header">
                    <div className="pull-left">
                        <h3 className="pull-left">Tasks</h3>
                    </div>
                    <div className="add-task-div pull-left">
                        <button className="btn btn-default"
                                onClick={ this.showAddTaskModal.bind(this) } >Add Task</button>
                    </div>
                    <div className="pull-right show-completed">
                        <label>Show Completed</label>
                        <input type="checkbox" className="pull-right"
                               onClick={ (event) => this.toggleShowCompleted(event) } />
                    </div>
                </div>

                <table id="catalogTable" width="100%" className="order-column table  table-striped table-hover" cellSpacing={0}>
                <thead>
                <tr>
                    <th><a href="javascript:void(0)" onClick={ this.sort.bind(this) } data-id="id">Id</a>
                            <span className={ classNames( { 'sortIndicator glyphicon glyphicon-circle-arrow-up' : (this.sortDir === 'ASC'),
                                                            'sortIndicator glyphicon glyphicon-circle-arrow-down' : (this.sortDir !== 'ASC'),
                                                            'hidden' : this.sortCol !== 'id' }) }></span>
                    </th>
                    <th><a href="javascript:void(0)" onClick={ this.sort.bind(this) } data-id="title">Title</a>
                            <span className={ classNames( { 'sortIndicator glyphicon glyphicon-circle-arrow-up' : (this.sortDir === 'ASC'),
                                                            'sortIndicator glyphicon glyphicon-circle-arrow-down' : (this.sortDir !== 'ASC'),
                                                            'hidden' : this.sortCol !== 'title' }) }></span>
                    </th>
                    <th><a href="javascript:void(0)" onClick={ this.sort.bind(this) } data-id="description">Description</a>
                            <span className={ classNames( { 'sortIndicator glyphicon glyphicon-circle-arrow-up' : (this.sortDir === 'ASC'),
                                                            'sortIndicator glyphicon glyphicon-circle-arrow-down' : (this.sortDir !== 'ASC'),
                                                            'hidden' : this.sortCol !== 'description' }) }></span>
                    </th>
                    <th><a href="javascript:void(0)" onClick={ this.sort.bind(this) } data-id="priority">Priority</a>
                            <span className={ classNames( { 'sortIndicator glyphicon glyphicon-circle-arrow-up' : (this.sortDir === 'ASC'),
                                                            'sortIndicator glyphicon glyphicon-circle-arrow-down' : (this.sortDir !== 'ASC'),
                                                            'hidden' : this.sortCol !== 'priority' }) }></span>
                    </th>
                    <th><a href="javascript:void(0)" onClick={ this.sort.bind(this) } data-id="create_dt">Create Date</a>
                          <span className={ classNames( { 'sortIndicator glyphicon glyphicon-circle-arrow-up' : (this.sortDir === 'ASC'),
                                                            'sortIndicator glyphicon glyphicon-circle-arrow-down' : (this.sortDir !== 'ASC'),
                                                            'hidden' : this.sortCol !== 'create_dt' }) }></span>
                    </th>
                    <th><a href="javascript:void(0)" onClick={ this.sort.bind(this) } data-id="status">Status</a>
                          <span className={ classNames( { 'sortIndicator glyphicon glyphicon-circle-arrow-up' : (this.sortDir === 'ASC'),
                                                            'sortIndicator glyphicon glyphicon-circle-arrow-down' : (this.sortDir !== 'ASC'),
                                                            'hidden' : this.sortCol !== 'status' }) }></span>
                    </th>
                    <th>Toggle Complete</th>
                </tr>
                </thead>
                <tbody>
                    {tasksJSX}
                </tbody>
                </table>

                <Modal
                    content={ <div><div className="modalHeader" style={{backgroundColor: "#006d9d"}}>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="glyphicon glyphicon-remove" aria-hidden="true" style={{color: "#fff"}} /></button>
                        <h4 className="modal-title custom_align" id="Heading" style={{color: "#fff"}}>Add Task</h4>
                    </div>
                    <div className="modal-body">
                        <form acceptCharset="UTF-8" role="form">
                            <div>
                                <label className="radio-inline">Title</label>
                                <input type="text" onChange={ (event) => this.setState({newTitle: event.target.value} )} placeholder="Title" value={this.state.newTitle} />
                            </div>
                            <div>
                                <label className="radio-inline">Description</label>
                                <input type="text" onChange={ (event) => this.setState({newDescription: event.target.value} )} placeholder="Description" value={this.state.newDescription} />
                            </div>
                            <div>
                                <label className="radio-inline">Priority (numeric)</label>
                                <input type="number"  onChange={ (event) => this.setState({newPriority: event.target.value} )} placeholder="Priority" value={this.state.newPriority} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer ">
                        <button type="button" onClick={this.saveNewTask.bind(this) } className="btn btn-default"><span className="glyphicon glyphicon-ok" style={{color: "#7fb741"}} /> Ok </button>
        </div></div> }
        >
                </Modal>

                </div>;

    }
}
;

export default TaskContainer
