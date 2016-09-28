'use strict'

import React from 'react';

class Modal extends React.Component {

    constructor(){
        super(...arguments);
        this.state = {
            showCompleted : false,
            isOpen:false
        };
    }

    render () {
        return <div className="modal fade" id="addTask" tabIndex={-1} role="dialog" aria-labelledby="edit" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    { this.props.content }
                </div>
            </div>
        </div>
    }
};

export default Modal
