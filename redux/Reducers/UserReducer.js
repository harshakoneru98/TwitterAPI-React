import React from 'react';
import { types } from '../actionCreators/Types';

const initialState = {
    user: ''
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.VALIDATE_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};

export default UserReducer;
