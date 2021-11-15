import * as allTypes from './Types';

export const validateUser = (data) => {
    return {
        type: allTypes.types.VALIDATE_USER,
        payload: data
    };
};
