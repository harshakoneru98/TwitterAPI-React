import { combineReducers } from 'redux';
import UserReducer from './Reducers/UserReducer';
import TweetsReducer from './Reducers/TweetsReducer';

const ReduxReducer = combineReducers({
    UserReducer,
    TweetsReducer
});

export default ReduxReducer;
