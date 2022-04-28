import React from 'react'
// import './style.css'

const LoginForm = () => {
  const [isSignUpActive, setIsSignUpActive] = React.useState(false)
  const signUpButton = () => {
    setIsSignUpActive(true)
  }
  const signInButton = () => {
    setIsSignUpActive(false)
  }

  return (
    <>
      <div className={`container${isSignUpActive ? ' sign-up-mode' : ''}`}>
        <div className='forms-container'>
          <div className='signin-signup'>
            <form action='#' className='sign-in-form'>
              <h2 className='title'>Sign in</h2>
              <div className='input-field'>
                <i className='fas fa-user' />
                <input type='text' placeholder='Username' />
              </div>
              <div className='input-field'>
                <i className='fas fa-lock' />
                <input type='password' placeholder='Password' />
              </div>
              <input type='submit' defaultValue='Login' className='btn solid' />
              <p className='social-text'>Or Sign in with social platforms</p>
              <div className='social-media'>
                <a href='/' className='social-icon'>
                  <i className='fab fa-facebook-f' />
                </a>
                <a href='/' className='social-icon'>
                  <i className='fab fa-twitter' />
                </a>
                <a href='/' className='social-icon'>
                  <i className='fab fa-google' />
                </a>
                <a href='/' className='social-icon'>
                  <i className='fab fa-linkedin-in' />
                </a>
              </div>
            </form>
            <form action='#' className='sign-up-form'>
              <h2 className='title'>Sign up</h2>
              <div className='input-field'>
                <i className='fas fa-user' />
                <input type='text' placeholder='Username' />
              </div>
              <div className='input-field'>
                <i className='fas fa-envelope' />
                <input type='email' placeholder='Email' />
              </div>
              <div className='input-field'>
                <i className='fas fa-lock' />
                <input type='password' placeholder='Password' />
              </div>
              <div className='input-field'>
                <i className='fas fa-lock' />
                <input type='password' placeholder='Check Password' />
              </div>
              <input type='submit' className='btn' defaultValue='Sign up' />
              <p className='social-text'>Or Sign up with social platforms</p>
              <div className='social-media'>
                <a href='/' className='social-icon'>
                  <i className='fab fa-facebook-f' />
                </a>
                <a href='/' className='social-icon'>
                  <i className='fab fa-twitter' />
                </a>
                <a href='/' className='social-icon'>
                  <i className='fab fa-google' />
                </a>
                <a href='/' className='social-icon'>
                  <i className='fab fa-linkedin-in' />
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className='panels-container'>
          <div className='panel left-panel'>
            <div className='content'>
              <h3>Register ?</h3>
              <p>Enter Your Details to create your account</p>
              <button
                className='btn transparent'
                id='sign-up-btn'
                onClick={signUpButton}
              >
                Sign up
              </button>
            </div>
            <img src='img/log.svg' className='image' alt='' />
          </div>
          <div className='panel right-panel'>
            <div className='content'>
              <h3>Already Have Accout ?</h3>
              <p>If you Already have an Accout please log in.</p>
              <button
                className='btn transparent'
                id='sign-in-btn'
                onClick={signInButton}
              >
                Log in
              </button>
            </div>
            <img src='img/register.svg' className='image' alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm
