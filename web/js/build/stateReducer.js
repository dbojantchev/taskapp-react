"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


var stateReducer = function stateReducer(state, action) {
    switch (action.type) {
        case "LOAD_DATA":
            return "LOADING_DATA";
        case "LOADED_DATA":
            return "RENDER_DATA";
        default:
            return state;

    }
};

exports.default = stateReducer;