import { combineReducers } from "redux";
import counter from './counter/Reducer';
import repo from './repo/RepoReducer';
import mediaList from './graphql/GraphqlReducer';
const rootReducers = combineReducers({
    counter,
    repo,
    mediaList
});

export default rootReducers;