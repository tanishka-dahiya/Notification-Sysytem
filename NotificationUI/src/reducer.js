import { combineReducers } from 'redux';
import RegisterUser from './ReduxContainers/registerAndLogin';
import NotificationReducer from './ReduxContainers/registerAndLogin';

const rootReducer = combineReducers({
    RegisterUser, NotificationReducer
});

export default rootReducer;