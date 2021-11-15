import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/header.component';
import ValidateUserThunk from '../../redux/actionCreators/ValidateUserThunk';

function CheckUserView() {
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [textStatus, setTextStatus] = useState(false);

    const userExists = useSelector((state) => state.UserReducer?.user ?? '');

    let searchUser = () => {
        setTextStatus(true);
        dispatch(ValidateUserThunk(userName));
    };

    return (
        <div>
            <Header />
            <div className="auth-wrapper">
                <div className="auth-inner validate-user">
                    <form className="form">
                        <h3>Check User</h3>

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

                    {userExists?.user?.data?.id && textStatus && (
                        <div className="label-text label-green">
                            User with{' '}
                            <b>
                                username{' '}
                                {' ' + userExists?.user?.data?.username}
                            </b>{' '}
                            exists
                        </div>
                    )}

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
                </div>
            </div>
        </div>
    );
}

export default CheckUserView;
