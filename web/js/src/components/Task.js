'use strict'

import React from 'react';
import store from '../store';


class Task extends React.Component {

    constructor(){
        super(...arguments);

    }

    toggleCompleted(ev){
        this.props.task.status = (this.props.task.status === 0) ? 1 : 0;
        //this.props.markComplete(this.props.task);     /* DIRECT INVOCATION */
        store.dispatch({type : 'TOGGLED_TASK_COMPLETION', task : this.props.task});
    }

    render () {

        var task = this.props.task;

        return <tr id="task{{task.id}}row" className="{completed }" >
                <td>{task.id}</td>
                <td>{task.title }</td>
                <td>{ task.description }</td>
                <td style={{textAlign:'center'}}>{ task.priority }</td>
                <td>{ task.create_dt }</td>
                <td>{ (task.status === 0) ? 'Incomplete' : 'Complete' } </td>
                <td><input id="markComplete{task.id}" type="checkbox" checked={(task.status > 0) ? "checked" : ""} style={{marginLeft:'30px'}}
                           onClick={ this.toggleCompleted.bind(this) } data-id={task.id}></input></td>
            </tr>;

    }
};

export default Task;
