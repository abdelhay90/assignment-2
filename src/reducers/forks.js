export const forks = (state = [], {type, forks}) => {
    if (type === 'FETCHED_FORKS') {
        state = {
            forks
        };
    }
    return state;
};