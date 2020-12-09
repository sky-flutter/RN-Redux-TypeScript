import * as Actions from './ActionTypes';
import { Dispatch } from 'redux';
import { callApi } from '../api/ApiService';
import { Reducer } from 'react';
// import { RepoActions } from './Action';
// import { FetchRepoError, FetchRepoSuccess, FetchRepoPending } from './Action';
export interface IRepoState {
    readonly repo: [];
    readonly loading: boolean;
    readonly error: string;
}

const initialState: IRepoState = {
    repo: [],
    loading: false,
    error: "",
};

// const repo: Reducer<IRepoState, RepoActions> = (state: IRepoState = initialState, action) => {
//     try {
//         switch (action.type) {
//             case "FetchRepoPending":
//                 return {
//                     ...state,
//                     loading: false
//                 };
//             case "FetchRepoSuccess":
//                 return {
//                     ...state,
//                     loading: false,
//                     repo: action.repo
//                 };
//             case "FetchRepoError":
//                 return {
//                     ...state,
//                     loading: false,
//                     error: action.error
//                 };
//             default:
//                 return state;
//         }
//     } catch (error) {
//         return {
//             ...state,
//             loading: false,
//             error: "Error in fetching data"
//         };
//     }
// }

const repo = (state = initialState, action: any) => {
    try {
        switch (action.type) {
            case Actions.FETCH_REPO:
                fetch("https://jsonplaceholder.typicode.com/posts")
                    .then((response) => response.json())
                    .then((response) => {
                        if (response.error) {
                            throw (response.error);
                        }
                        console.log("Api Response : ", response);
                        return {
                            ...state,
                            repo: response
                        };
                    })
                    .catch((error) => {
                        return {
                            ...state,
                            error: error
                        };
                    });
            case Actions.FETCH_PENDING:
                return {
                    ...state,
                    loading: true,
                };
            case Actions.FETCH_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    repo: action.payload
                };
            case Actions.FETCH_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.error
                };
            default:
                return state;
        }
    } catch (error) {
        console.log(error);
    }
}

// export function fetchRepo() {
//     return (dispatch: Dispatch) => {
//         dispatch(FetchRepoPending());
//         return callApi("https://jsonplaceholder.typicode.com/posts", (response: any) => {
//             return dispatch(FetchRepoSuccess(response));
//         }, (error: any) => {
//             return dispatch(FetchRepoError(error));
//         });
//     }
// }



export default repo;