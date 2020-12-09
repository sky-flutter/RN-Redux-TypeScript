import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from 'redux-thunk';
// import { IGettingRepoPending, IGettingRepoSuccess, IGettingRepoError, RepoActions } from "./Action";
// export const getRepoActionCreator: ActionCreator<ThunkAction<Promise<RepoActions>, [], void, RepoActions>> = () => {
//     return async (dispatch: Dispatch) => {
//         const repoAction: IGettingRepoPending = {
//             type: "FetchRepoPending",
//         };
//         dispatch(repoAction);
//         try {
//             const repo = await fetch("https://jsonplaceholder.typicode.com/posts");
//             const objRepo = await repo.json();
//             if (objRepo.error) {
//                 const repoActionError: IGettingRepoError = {
//                     type: "FetchRepoError",
//                     error: "Error in fetching data"
//                 };
//                 return dispatch(repoActionError);
//             }
//             const repoActionDone: IGettingRepoSuccess = {
//                 type: "FetchRepoSuccess",
//                 repo: objRepo,
//             };
//             return dispatch(repoActionDone);
//         } catch (error) {
//             const repoActionError: IGettingRepoError = {
//                 type: "FetchRepoError",
//                 error: error
//             };
//             return dispatch(repoActionError);
//         }
//     };
// }