import { combineReducers } from 'redux';
import RegisterUser from './ReduxContainers/registerAndLogin';
import NotificationReducer from './ReduxContainers/Notifications';

const rootReducer = combineReducers({
    RegisterUser, NotificationReducer
});

export default rootReducer;