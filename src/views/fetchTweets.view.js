import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/header.component';
import ValidateUserThunk from '../../redux/actionCreators/ValidateUserThunk';
import GetTweetThunk from '../../redux/actionCreators/GetTweetThunk';

function FetchTweetsView() {
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [textStatus, setTextStatus] = useState(false);

    const userExists = useSelector((state) => state.UserReducer?.user ?? '');
    const tweets = useSelector((state) => state.TweetsReducer?.tweets ?? '');

    useEffect(() => {
        if (userExists?.user?.data?.id && textStatus) {
            dispatch(GetTweetThunk(userName));
        }
    }, [textStatus, userExists]);

    let searchUser = () => {
        setTextStatus(true);
        dispatch(ValidateUserThunk(userName));
    };

    return (
        <div>
            <Header />
            <div className="validate-wrapper">
                <div className="tweet-user">
                    <form className="form">
                        <h3>Fetch Tweets</h3>

                        <div className="form-group">
                            <label>User Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Username"
                                onChange={(e) => {
                                    setUserName(e.target.value);
                                    setTextStatus(false);
                                }}
                                value={userName}
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <a
                                className="btn btn-primary btn-block btn-md center-block"
                                onClick={(e) => {
                                    searchUser();
                                    e.preventDefault();
                                }}
                            >
                                Search
                            </a>

                            <a
                                className="btn btn-danger btn-block btn-md center-block"
                                onClick={(e) => {
                                    setUserName('');
                                    setTextStatus(false);
                                    e.preventDefault();
                                }}
                            >
                                Clear
                            </a>
                        </div>
                    </form>

                    {!userExists?.user?.data?.id &&
                        userExists?.user?.errors[0]?.value &&
                        userName != '' &&
                        textStatus && (
                            <div className="label-text label-red">
                                Could not find user with{' '}
                                <b>
                                    username{' '}
                                    {' ' + userExists?.user?.errors[0]?.value}
                                </b>
                            </div>
                        )}

                    {!userExists?.user?.data?.id &&
                        !userExists?.user?.errors[0]?.value &&
                        userName != '' &&
                        textStatus && (
                            <div className="label-text label-red">
                                Username doesn't match Twitter standard
                                (^[A-Za-z0-9_]
                                {(1, 15)}$)
                            </div>
                        )}

                    {userExists?.user?.data?.id &&
                        textStatus &&
                        !tweets?.user?.data && (
                            <div className="label-text label-red">
                                User with{' '}
                                <b>
                                    username{' '}
                                    {' ' + userExists?.user?.data?.username}
                                </b>{' '}
                                have 0 records
                            </div>
                        )}

                    {userExists?.user?.data?.id &&
                        textStatus &&
                        tweets?.user?.data && (
                            <div className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>
                                            <th>Latest</th>
                                            <th>Tweet</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tweets?.user?.data?.map(
                                            (record, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="latest">
                                                            {index + 1}
                                                        </td>
                                                        <td>{record.text}</td>
                                                    </tr>
                                                );
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}

export default FetchTweetsView;
