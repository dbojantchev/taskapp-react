'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var stateReducer = function stateReducer(state, action) {
    switch (action.type) {
        default:
            return action;
    }
};

var store = (0, _redux.createStore)(stateReducer);

exports.default = store;