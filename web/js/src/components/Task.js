'use strict'

import React from 'react';


class Task extends React.Component {

    constructor(){
        super(...arguments);

    }
    render () {

        let style1 = {textAlign:'center'};
        let style2 = {marginLeft:'30px'};

        var task = this.props.task;

        return <tr id="task{{task.id}}row" className="{completed }" >
                <td>{task.id}</td>
                <td>{task.title }</td>
                <td>{ task.description }</td>
                <td style={style1}>{ task.priority }</td>
                <td>{ task.create_dt }</td>
                <td>{ (task.status === 0) ? 'Incomplete' : 'Complete' } </td>
                <td><input id="showTasks{task.id}" type="checkbox" style={style2}></input></td>
            </tr>;

    }
};

export default Task;
