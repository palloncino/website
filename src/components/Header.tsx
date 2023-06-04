import React from 'react';
import styles from '../style/Header.module.css';

function Header() {
    return (
        <div id='Header' className={styles.header_background}>
            <div className={styles.header_container}>
                <div className={styles.heading}>Hello World!</div>
                <div className={styles.subheading}>I am Seeking Employment in Animal Welfare.</div>
            </div>
        </div>
    );
}

export default Header;