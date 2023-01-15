import { HiTranslate, HiOutlineMail, HiOutlineMenuAlt1 } from "react-icons/hi";
import styles from "../src/styles/Layout.module.css";

const Header = () => {
    return (
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
                    <li class={styles.langSwitcher}>
                        <HiTranslate />
                        <div className={`${styles.langEn} ${styles.active}`}>EN</div>
                        <div className={styles.langTc}>TC</div>
                    </li>
                </ul>
                <ul class={styles.mobileNav}>
                    <li class={styles.contact}>
                        <HiOutlineMail />
                    </li>
                    <li class={styles.sidebarToggle}>
                        <HiOutlineMenuAlt1 />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;