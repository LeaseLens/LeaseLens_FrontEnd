import React from 'react'

export default function Login() {
  return (
    <div>
      <form action="" method="post" id="login_form">
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
            <a href="#">Sign up</a>
          </div>
        </div>
      </form>
    </div>
  )
}
