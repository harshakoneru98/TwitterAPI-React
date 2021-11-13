import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import logo from '../../public/assets/logo-nobg.png';

export default function Header() {
    const router = useRouter();

    const [isRoute, setIsRoute] = useState('');
    const [isLevel, setIsLevel] = useState('');

    useEffect(() => {
        setIsRoute(router.route);
        if (router.route == '/') {
            setIsLevel('home');
        } else if (router.route == '/twitter-api/check-user') {
            setIsLevel('check-user');
        } else {
            setIsLevel('fetch-tweets');
        }
    }, [isRoute]);

    let changeRoute = (elementRoute) => {
        setIsRoute(elementRoute);
        router.push(elementRoute);
    };

    return (
        <div className="main-header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <a
                className="navbar-brand"
                onClick={(e) => {
                    changeRoute('/');
                    e.preventDefault();
                }}
            >
                <img src={logo.src} alt="Main" />
            </a>
            {isLevel != 'home' && (
                <nav className="my-2 my-md-0 mr-md-3">
                    <a
                        className={
                            isLevel == 'check-user'
                                ? 'p-2 text-dark black-link'
                                : 'p-2 text-dark'
                        }
                        onClick={(e) => {
                            changeRoute('/twitter-api/check-user');
                            e.preventDefault();
                        }}
                    >
                        Check User
                    </a>
                    <a
                        className={
                            isLevel == 'fetch-tweets'
                                ? 'p-2 text-dark black-link'
                                : 'p-2 text-dark'
                        }
                        onClick={(e) => {
                            changeRoute('/twitter-api/fetch-tweets');
                            e.preventDefault();
                        }}
                    >
                        Fetch Tweets
                    </a>
                </nav>
            )}
        </div>
    );
}
