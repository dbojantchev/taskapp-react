import {createStore} from 'redux';

const stateReducer = (state, action) => {
    switch (action.type) {
        default:
            return action;
    }
};

const store = createStore(stateReducer);

export default store;
