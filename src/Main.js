import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span className={styles.greeting}>Привет!</span>
                    <span className={styles.greeting}>Меня зовут Сейнароев Хамзат.</span>
                    <span className={styles.greeting}>Я front-end разработчик.</span>
                </div>
                <div className={styles.photo}>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Main;
