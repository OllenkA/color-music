import React from 'react';
import styles from './Footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faGoogle, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <span className={styles.blockTitle}>Task completed by
                    <a href={' https://ollenka.github.io/Portfolio-1'}
                       target="_blank" rel="noreferrer noopener" className={styles.hrefToPortfolio}> Olga Shamko</a>
                </span>

                <nav className={styles.socialBlock}>
                    <a className={styles.socialIcon}
                       href={'https://www.linkedin.com/in/olga-shamko-153715191/'}
                       target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon size={'2x'} icon={faLinkedin}/>
                    </a>

                    <a className={styles.socialIcon}
                       href={'https://t.me/Ollenka_Shamko'}
                       target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon size={'2x'} icon={faTelegram}/>
                    </a>

                    <a className={styles.socialIcon}
                       href={'https://github.com/OllenkA'}
                       target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon size={'2x'} icon={faGithub}/>
                    </a>

                    <a className={styles.socialIcon}
                       href={'https://shamko.olga2018@gmail.com'}
                       target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon size={'2x'} icon={faGoogle}/>
                    </a>
                </nav>
                {/*<span className={styles.blockTitle}>© 2019 All Rights Reserved.</span>*/}
            </div>
        </footer>
    )
};

export default Footer;
