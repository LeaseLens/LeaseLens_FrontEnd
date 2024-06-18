import React, { useState } from 'react'
import textLogo from '../assets/images/Logo/leaselens_text_logo.png'
import profile from '../assets/images/etc/icon_profile.png'

export default function Header() {
    const [profileTog, setProfileTog] = useState(false)

    const profileBtn = () => {
        setProfileTog(!profileTog)
    }

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
                <div className="head_loginUser">
                    <img src={profile} alt="프로필 아이콘" className='head_profile' onClick={profileBtn} />
                    <span>Login</span>
                </div>
            </div>
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
        </>
    )
}
