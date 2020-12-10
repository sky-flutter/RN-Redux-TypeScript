import { combineReducers } from "redux";
import counter from './counter/Reducer';
import repo from './repo/RepoReducer';
import mediaList from './graphql/GraphqlReducer';
import SignInReducer from './auth/SignInReducer';
const rootReducers = combineReducers({
    counter,
    repo,
    mediaList,
    SignInReducer
});

export default rootReducers;