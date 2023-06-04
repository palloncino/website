import React from 'react';
import styles from '../style/SecondPage.module.css';

function SecondPage() {
    return (
        <div id='SecondPage' className={styles.secondpage_background}>
            <div className={styles.secondpage_container}>
                <div className={styles.listhead}>
                    Contacts
                </div>
                <div className={styles.listitem}>
                    <span className={styles.boldtext}>Email:</span> powerhydratoni@gmail.com
                </div>
                <div className={styles.listitem}>
                    <span className={styles.boldtext}>Phone:</span> +39 3474943221
                </div>
                <div className={styles.listitem}>
                    <span className={styles.boldtext}><a href="https://wa.me/00393474943221">Contact me on Whatsapp now</a></span>
                </div>
            </div>
        </div>
    );
}

export default SecondPage;