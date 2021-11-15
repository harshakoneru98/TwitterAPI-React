import * as allTypes from './Types';

export const getTweets = (data) => {
    return {
        type: allTypes.types.GET_TWEETS,
        payload: data
    };
};
