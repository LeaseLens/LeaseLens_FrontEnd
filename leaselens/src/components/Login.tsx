import React, { useState } from 'react';
import { BsXLg } from "react-icons/bs";
import type { LoginProps } from "../types/types";

export default function Login({ onClose }: LoginProps) {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className='login_form_back'>
      {isLoginForm ? (
        <form action="" method="post" id="login_form">
          <BsXLg style={{ position: 'absolute', right: 20, top: 50, width: 25, height: 25 }} onClick={onClose} />
          <div id="login_body">
            <div id="login_welcome">
              <div id="login_welcome-1">Lease Lens</div>
              <div id="login_welcome-2">Welcome to Lease Lens</div>
            </div>
            <div id="login_input">
              <div className="login_input_item">
                <input placeholder="id" type="text" />
              </div>
              <div className="login_input_item">
                <input placeholder="Password" type="password" />
              </div>
            </div>
            <div id="login_submit">
              <button id="login_submitBtn" type="submit">Login</button>
            </div>
            <div id="login_to_signup">
              <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>Sign up</a>
            </div>
          </div>
        </form>
      ) : (
        <form action="" method="post" id="signup_form">
          <BsXLg style={{ position: 'absolute', right: 20, top: 50, width: 25, height: 25 }} onClick={onClose} />
          <div id="signup_body">
            <div id="login_welcome">
              <div id="login_welcome-1">Lease Lens</div>
              <div id="login_welcome-2">Welcome to Lease Lens</div>
            </div>
            <div id="login_input">
              <div className="login_input_item">
                <input placeholder="name" type="text" />
              </div>
              <div className="login_input_item">
                <input placeholder="id" type="text" />
              </div>
              <div className="login_input_item">
                <input placeholder="Password" type="password" />
              </div>
              <div className="login_input_item">
                <input placeholder="Check Password" type="password" />
              </div>
            </div>
            <div id="login_submit">
              <button id="login_submitBtn" type="submit">Sign Up</button>
            </div>
            <div id="login_to_signup">
              <a href="#" onClick={(e) => { e.preventDefault(); toggleForm(); }}>Login</a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}