import { combineReducers } from "redux";
import counter from './counter/Reducer';
import repo from './repo/RepoReducer';

const rootReducers = combineReducers({
    counter,
    repo
});

export default rootReducers;