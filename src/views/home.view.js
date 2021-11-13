import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/header.component';

function HomeView() {
    const router = useRouter();

    const [isRoute, setIsRoute] = useState('');

    useEffect(() => {
        setIsRoute(router.route);
    });

    let changeRoute = (elementRoute) => {
        setIsRoute(elementRoute);
        router.push(elementRoute);
    };
    return (
        <div>
            <Header />
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Welcome to Twitter API React App</h3>
                    <p>We provide you two main services. Explore them !!!</p>
                    <div className="d-flex justify-content-center">
                        <a
                            id="btnCheckUser"
                            className="btn btn-primary btn-block btn-md center-block"
                            onClick={(e) => {
                                changeRoute('/twitter-api/check-user');
                                e.preventDefault();
                            }}
                        >
                            Check User
                        </a>

                        <a
                            id="btnFetchTweets"
                            className="btn btn-primary btn-block btn-md center-block"
                            onClick={(e) => {
                                changeRoute('/twitter-api/fetch-tweets');
                                e.preventDefault();
                            }}
                        >
                            Fetch Tweets
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeView;
