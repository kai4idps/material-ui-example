import { combineReducers } from 'redux';
import settings from './settings/reducer';
import chatReducer from "./chat/reducer";
import contactReducer from "./contacts/";
import emailReducer from "./email/";
import notesReducer from "./notes/reducer";

const reducers = combineReducers({
    settings,
    chatReducer,
    contactReducer,
    emailReducer,
    notesReducer
});

export default reducers;