import React from 'react';
import styles from './Skills.module.css';

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <h2>Мои скиллы</h2>
                <div className={styles.skillBox}>
                    <div className={styles.skill}>
                        <img className={styles.img}/>
                        <h3>HTML</h3>
                        <h4>Я знаю HTML</h4>
                    </div>
                    <div className={styles.skill}>
                        <img className={styles.img}/>
                        <h3>CSS</h3>
                        <h4>Я знаю CSS</h4>
                    </div>
                    <div className={styles.skill}>
                        <img className={styles.img}/>
                        <h3>React</h3>
                        <h4>Я знаю React</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
