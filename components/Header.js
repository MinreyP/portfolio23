import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import navLinks from '../src/utils/navLinks';
import { HiTranslate } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import styles from "../src/styles/Layout.module.css";

const Header = () => {
    const { route } = useRouter();
    const [mbMenu, setMbmenu] = useState(false);
    const [color, setColor] = useState('');

    const defineHeaderColor = () => {
        if (route === "/") {
            setColor('light');
        } else {
            setColor('dark')
        }
    }

    useEffect(() => {
        defineHeaderColor();
    });

    const toggleMobileMenu = () => {
        setMbmenu(!mbMenu);
    }

    return (
        <>
            <header className={color === 'light' ? (styles.header) : `${styles.header} ${styles.dark}`}>
                <a className={styles.brand} href="/">
                    <h1>MONKHAUS</h1>
                    <h3>A Minrey Peng's Portfolio</h3>
                </a>
                <nav className={styles.navMain}>
                    <ul>
                        {
                            navLinks.map((link, i) => {
                                let { path } = link;
                                if (path === route) {
                                    return (
                                        <li key={i}><a href={path} className={`${styles.link} ${styles.active}`}>{link.title}</a></li>)
                                } else {
                                    return (
                                        <li key={i}><a href={path} className={styles.link}>{link.title}</a></li>
                                    )
                                }
                            })
                        }
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