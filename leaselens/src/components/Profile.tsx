import React from 'react';
import { Button } from 'react-bootstrap';
import { ButtonProps } from 'react-bootstrap/Button';
import { UserdbProps } from '../types/logintypes';

export default function Profile({user_name, user_ID, user_points}: UserdbProps) {
  return (
    <div className='profile_container'>
        <h3>{user_name}님의 회원 정보</h3>
        <div className="profile_content">
          <div className="profile_user">
            <h4>{user_ID}님</h4>
            <div>아이디</div>
          </div>
          <div className="profile_point">
            <h4>{user_ID}님의 잔여 포인트</h4>
            <div>{user_points}point</div>
          </div>
        </div>
        <Button variant="outline-danger" className='profile_userDel'>회원 탈퇴</Button>
    </div>
  )
}
