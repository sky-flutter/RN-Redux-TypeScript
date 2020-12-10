import { SIGNIN_ERROR, SIGNIN_INITIATED, SIGNIN_SUCCESS } from "./Types"


export const SigninInitiated = () => {
    return {
        type: SIGNIN_INITIATED,
    }
}

const SigninSucess = (result: any) => {
    return {
        type: SIGNIN_SUCCESS,
        payload: result
    }
}

const SigninError = (error: any) => {
    return {
        type: SIGNIN_ERROR,
        error: error
    }
}