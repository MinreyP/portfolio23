import navLinks from '../src/utils/navLinks';
import style from '../src/styles/Layout.module.css';
import { SiGithub, SiLinkedin } from "react-icons/si";

const MobileMenu = ({ active }) => {
    return (
        <div className={active ? `${style.mobileMenuWrapper} ${style.active}` : (style.mobileMenuWrapper)}>
            <nav className={style.mobileNav}>
                <ul>
                    {
                        navLinks.map((link, i) => {
                            let { path } = link;
                            return (
                                <li><a href={path} className={style.link}>{link.title}</a></li>
                            )
                        })
                    }
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