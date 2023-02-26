import React from 'react';
import styles from './Drawer.module.scss';
import axios from 'axios';

const Drawer = (props) => {
    return (
        <div className={styles.overlay}>
        <div className={styles.drawer}>
          <div className={styles.drawer__header}>
          <h2>Cart</h2>
          <svg onClick={props.onCloseCart} className={styles.drawer__headerClose} width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path d="M41,43a2,2,0,0,1-1.41-.59L5.62,8.44A2,2,0,0,1,8.44,5.62L42.38,39.56A2,2,0,0,1,41,43Z" fill="#777" />
                  <path d="M7,43a2,2,0,0,1-1.41-3.41L39.56,5.62a2,2,0,0,1,2.83,2.83L8.44,42.38A2,2,0,0,1,7,43Z" fill="#777" />
                </g>
              </svg>
          </div>

          <div className={styles.cart}>
            <div className={styles.cart__item}>
              <img className={styles.cart__itemImgg} src="./images/gpus/4090.jpg" alt="2060" />
              <div className={styles.cart__itemInfo}>
                <p className={styles.name}>MSI - NVIDIA GeForce RTX 2060 Ventus</p>
                <b className={styles.price}>292$</b>
              </div>
              <svg className={styles.cart__itemRemove} width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path d="M41,43a2,2,0,0,1-1.41-.59L5.62,8.44A2,2,0,0,1,8.44,5.62L42.38,39.56A2,2,0,0,1,41,43Z" fill="#777" />
                  <path d="M7,43a2,2,0,0,1-1.41-3.41L39.56,5.62a2,2,0,0,1,2.83,2.83L8.44,42.38A2,2,0,0,1,7,43Z" fill="#777" />
                </g>
              </svg>
            </div>
             
          </div>

          <div className={styles.total}>
            <ul>
              <li>
                <span>Total:</span>
                <div></div>
                <b>200$</b>
              </li>
              <li>
                <span>Tax 5%:</span>
                <div></div>
                <b>2.2$</b>
              </li>
            </ul>
            <button className={styles.total__btn}>Checkout<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7H14.7143" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </button>
          </div>

        </div>
      </div>
    )
}

export default Drawer;


