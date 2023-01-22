import { useState } from "react";
import { HiTranslate } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import styles from "../src/styles/Layout.module.css";

const Header = () => {
    const [mbMenu, setMbmenu] = useState(false);

    const toggleMobileMenu = () => {
        setMbmenu(!mbMenu);
    }

    return (
        <>
            <header className={styles.header}>
                <a className={styles.brand}>
                    <h1>MONKHAUS</h1>
                    <h3>A Minrey Peng's Portfolio</h3>
                </a>
                <nav className={styles.navMain}>
                    <ul>
                        <li><a href="#" className={`${styles.link} ${styles.active}`}>Home</a></li>
                        <li><a href="/work" className={styles.link}>Work</a></li>
                        <li><a href="/resume" className={styles.link}>Resume</a></li>
                        <li><a href="/contact" className={styles.link}>Contact</a></li>
                    </ul>
                </nav>
                <nav className={styles.navInfos}>
                    <ul>
                        <li className={styles.langSwitcher}>
                            <HiTranslate />
                            <div className={`${styles.langEn} ${styles.active}`}>EN</div>
                            <div className={styles.langTc}>TC</div>
                        </li>
                        <div onClick={() => toggleMobileMenu()}
                            className={mbMenu ? `${styles.headerBurger} ${styles.active}` : (styles.headerBurger)}>
                            <div></div>
                        </div>
                    </ul>
                </nav>
            </header>
            {mbMenu ? <MobileMenu active={true} /> : <MobileMenu active={false} />}
        </>
    );
};

export default Header;