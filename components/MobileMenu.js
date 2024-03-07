import navLinks from '../src/utils/navLinks';
import { useSiteContext } from '../src/pages/api/siteContext';
import style from '../src/styles/Layout.module.css';
import { SiGithub, SiLinkedin } from "react-icons/si";

const MobileMenu = ({ active }) => {
    let { siteLang } = useSiteContext();

    return (
        <div className={active ? `${style.mobileMenuWrapper} ${style.active}` : (style.mobileMenuWrapper)}>
            <nav className={style.mobileNav}>
                <ul>
                    {
                        navLinks.map((link, i) => {
                            let { path } = link;
                            let linkTitle = siteLang == 'en' ? link.titleEn : link.titleTC;
                            return (
                                <li key={i}><a href={path} className={style.link}>{linkTitle}</a></li>
                            )
                        })
                    }
                </ul>
                <ul className={style.socialLinks}>
                    <li><a href="https://github.com/MinreyP" target="_blank"><SiGithub />Github</a></li>
                    <li><a href="https://www.linkedin.com/in/minreypeng/" target="_blank"><SiLinkedin />LinkedIn</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default MobileMenu;