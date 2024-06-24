import React, { useState } from 'react'
import { BsList } from "react-icons/bs";
import textLogo from '../assets/images/Logo/leaselens_text_logo.png'
import imgLogo from '../assets/images/Logo/leaselens_img_logo.png'
import profile from '../assets/images/etc/icon_profile.png'
import Login from './Login';

export default function Header() {
    const [profileTog, setProfileTog] = useState(false);
    const [menuTog, setMenuTog] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const profileBtn = () => {
        setProfileTog(!profileTog)
    }

    const menuBtn = () => {
        setMenuTog(!menuTog)
    }

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
    };

    return (
        <>
            <div className='head_container'>
                <div className="head_logo">
                    <img src={textLogo} alt="리스렌즈 로고" />
                </div>
                <div className="head_nav">
                    <ul>
                        <li>Products</li>
                        <li>Reviews</li>
                        <li>Events</li>
                    </ul>
                </div>
                <div className="head_nav_min">
                    <BsList style={{ height: '3em', width: '3em' }} onClick={menuBtn} />
                </div>
                <div className="head_logo_min">
                    <img src={imgLogo} alt="리스렌즈 로고" />
                </div>
                <div className="head_loginUser">
                    <img src={profile} alt="프로필 아이콘" className='head_profile' onClick={profileBtn} />
                    <span onClick={handleLoginClick}>Login</span>
                </div>
            </div>
            {menuTog ?
                <div className='head_navTog'>
                    <ul>
                        <li>Products</li>
                        <hr />
                        <li>Reviews</li>
                        <hr />
                        <li>Events</li>
                    </ul>
                </div>
                : ''
            }
            {profileTog ?
                <div className='head_profileTog'>
                    <ul>
                        <li><a href="">My Page</a></li>
                        <hr />
                        <li><a href="">Contact Us</a></li>
                        <hr />
                        <li><a href="">Logout</a></li>
                    </ul>
                </div>
                : ''
            }
            {showLogin && <Login onClose={handleCloseLogin} />}
        </>
    )
}
