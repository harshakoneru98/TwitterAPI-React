import { validateUser } from './validateUser';

const ValidateUserThunk = (username) => {
    return (dispatch) => {
        fetch('/api/validate-user?username=' + username)
            .then((res) => res.json())
            .then((data) => {
                dispatch(validateUser(data));
            });
    };
};

export default ValidateUserThunk;
