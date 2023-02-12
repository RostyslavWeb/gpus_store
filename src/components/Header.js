import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header className="header">
        <div className="header__logo">
          <img className="logo" width={80} height={80} src="/images/gpu-icon.png" alt="logo" />
          <div>
            <h3 className="header__logo-title">GPUs Store</h3>
            <p className="header__logo-subtitle">Best GPUs prices</p>
          </div>
        </div>
        <ul className="menu">
          <li className="menu__item">
            0.00$
          </li>
          <li className="menu__item">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 8.5L7.5 8C7.5 7.53566 7.5 7.30349 7.51926 7.10793C7.70631 5.20882 9.20882 3.70631 11.1079 3.51926C11.3035 3.5 11.5357 3.5 12 3.5V3.5C12.4643 3.5 12.6965 3.5 12.8921 3.51926C14.7912 3.7063 16.2937 5.20882 16.4807 7.10793C16.5 7.30349 16.5 7.53566 16.5 8L16.5 8.5" stroke="#222222" strokeLinecap="round" />
              <path d="M15.5 13.5V11.5" stroke="#222222" strokeLinecap="round" />
              <path d="M8.5 13.5V11.5" stroke="#222222" strokeLinecap="round" />
              <path d="M5.5 12.1C5.5 10.4029 5.5 9.55442 6.02721 9.02721C6.55442 8.5 7.40294 8.5 9.1 8.5H14.9C16.5971 8.5 17.4456 8.5 17.9728 9.02721C18.5 9.55442 18.5 10.4029 18.5 12.1V14.5C18.5 17.3284 18.5 18.7426 17.6213 19.6213C16.7426 20.5 15.3284 20.5 12.5 20.5H11.5C8.67157 20.5 7.25736 20.5 6.37868 19.6213C5.5 18.7426 5.5 17.3284 5.5 14.5V12.1Z" stroke="#222222" />
            </svg>
          </li>
          <li className="menu__item">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" stroke="#222222" />
            </svg>
          </li>
          <li className="menu__item">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="10" r="3" stroke="#222222" strokeLinecap="round" />
              <circle cx="12" cy="12" r="9" stroke="#222222" />
              <path d="M18 18.7059C17.6461 17.6427 16.8662 16.7033 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.13375 16.7033 6.35391 17.6427 6 18.7059" stroke="#222222" strokeLinecap="round" />
            </svg>
          </li>
        </ul>
      </header>
    )
  }
}
