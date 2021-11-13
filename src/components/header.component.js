import React from 'react';
import logo from '../../public/assets/logo-nobg.png';

export default function Header() {
    return (
        <div className="main-header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <a
                className="navbar-brand"
                onClick={(e) => {
                    // changeRoute('/');
                    e.preventDefault();
                }}
            >
                <img src={logo.src} alt="Main" />
            </a>
            <nav className="my-2 my-md-0 mr-md-3">
                <a
                    className="p-2 text-dark"
                    onClick={(e) => {
                        // changeRoute('/caaas/check-score');
                        e.preventDefault();
                    }}
                >
                    Check User
                </a>
                <a
                    className="p-2 text-dark"
                    onClick={(e) => {
                        // changeRoute('/caaas/add-record');
                        e.preventDefault();
                    }}
                >
                    Fetch Tweets
                </a>
            </nav>
        </div>
    );
}