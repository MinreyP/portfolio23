import styles from '../src/styles/Layout.module.css';
import { VscGithub } from "react-icons/vsc";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>This Site Is Proudly Created by Monkhaus. All Rights Reserved.</p>
            <div className={styles.footerLinks}>
                <a href="https://github.com/MinreyP" target="_blank"><VscGithub /></a>
                <a href="https://www.linkedin.com/in/minreypeng/" target="_blank"><AiOutlineLinkedin /></a>
                <a href="mailto:minreypeng@gmail.com"><AiOutlineMail /></a>
            </div>
        </footer>
    );
};

export default Footer;