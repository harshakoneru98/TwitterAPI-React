import React from 'react';
import { types } from '../actionCreators/Types';

const initialState = {
    tweets: ''
};

const TweetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TWEETS:
            return {
                ...state,
                tweets: action.payload
            };
        default:
            return state;
    }
};

export default TweetsReducer;
