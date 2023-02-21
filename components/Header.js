import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSiteContext } from '../src/pages/api/siteContext';
import { getTranslate } from "../src/pages/api/getTranslate";
import navLinks from '../src/utils/navLinks';
import { HiTranslate } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import styles from "../src/styles/Layout.module.css";

const Header = () => {
    const { route } = useRouter();
    const [color, setColor] = useState('');
    const { siteLang, mbMenu, toggleMobileMenu, switchLang } = useSiteContext();

    const defineHeaderColor = () => {
        if (route === "/") {
            setColor('light');
        } else {
            setColor('dark')
        }
    }

    const handleCLick = (e) => {
        let activeLink = e.target;
        let allLinks = Array.from(document.querySelectorAll('#main-nav .link'));

        allLinks.forEach(link => {
            link.classList.remove('active');
        })
        activeLink.classList.add('active');
    }

    useEffect(() => {
        defineHeaderColor();
    });

    return (
        <>
            <header className={color === 'light' ? (styles.header) : `${styles.header} ${styles.dark}`}>
                <a className={styles.brand} href="/">
                    <h1>MONKHAUS</h1>
                    <h3>A Minrey Peng's Portfolio</h3>
                </a>
                <nav className={styles.navMain} id="main-nav">
                    <ul>
                        {
                            navLinks.map((link, i) => {
                                let { path } = link;
                                let linkTitle = siteLang == 'en' ? link.titleEn : link.titleTC;
                                if (path === route) {
                                    return (
                                        <li key={i}><a href={link.path} onClick={(e) => handleCLick(e)}
                                            className={`${styles.link} ${styles.active}`}>{linkTitle}</a></li>
                                    )
                                } else {
                                    return (
                                        <li key={i}><a href={link.path} onClick={(e) => handleCLick(e)}
                                            className={`${styles.link}`}>{linkTitle}</a></li>
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
                            {siteLang === 'en'
                                ? <div className={styles.active}
                                    onClick={() => { switchLang('en') }}>EN</div>
                                : <div onClick={() => { switchLang('en') }}>EN</div>}
                            {siteLang === 'tc'
                                ? <div className={styles.active}
                                    onClick={() => { switchLang('en') }}>TC</div>
                                : <div onClick={() => { switchLang('tc') }}>TC</div>}
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