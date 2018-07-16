//import unionWith from 'lodash/unionWith';

export const gists = (state = [], {type, gists, user}) => {
    if (type === 'FETCHED_GISTS') {
        state = {
            gists,
            user
        };
    }
    return state;
};