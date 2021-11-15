import { getTweets } from './getTweets';

const GetTweetThunk = (username) => {
    return (dispatch) => {
        fetch('/api/get-tweets?username=' + username)
            .then((res) => res.json())
            .then((data) => {
                dispatch(getTweets(data.data));
            });
    };
};

export default GetTweetThunk;
