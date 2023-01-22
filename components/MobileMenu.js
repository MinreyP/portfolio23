import style from '../src/styles/Layout.module.css';
import { SiGithub, SiLinkedin } from "react-icons/si";

const MobileMenu = ({ active }) => {
    return (
        <div className={active ? `${style.mobileMenuWrapper} ${style.active}` : (style.mobileMenuWrapper)}>
            <nav className={style.mobileNav}>
                <ul>
                    <li><a href="#" className={`${style.link}`}>Home</a></li>
                    <li><a href="/work" className={`${style.link}`}>Work</a></li>
                    <li><a href="/resume" className={`${style.link}`}>Resume</a></li>
                    <li><a href="/contact" className={`${style.link}`}>Contact</a></li>
                </ul>
                <ul className={style.socialLinks}>
                    <li><a href="https://github.com/MinreyP" target="_blank"><SiGithub />Github</a></li>
                    <li><a href="https://www.linkedin.com/in/minrey-peng/" target="_blank"><SiLinkedin />LinkedIn</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default MobileMenu;