import * as actions from '../constants/actions';

export const setState = state => {
    return {
        type: actionTypes.SET_STATE,
        state
    }
}