import styles from "../src/styles/CV.module.css";
import { motion } from 'framer-motion';

const CV = () => {
    return (
        <div className={styles.cvOuter} id="print-ele">
            <div className={styles.cvContent}>
                <div className={styles.basicInfo}>
                    <article className={styles.nameTitle}>
                        <h2>Minrey Peng</h2>
                        <h3>Front-end Developer</h3>
                    </article>
                    <ul className={styles.contactInfo}>
                        <li><a href="https://www.monkhaus.uk/">www.monkhaus.uk/</a></li>
                        <li><a href="mailto:minreypeng@gmail.com">minreypeng@gmail.com</a></li>
                        <li><a href="https://www.linkedin.com/in/minrey-peng/" target="_new">linkedin.com/in/minrey-peng/</a></li>
                        <li><a href="https://github.com/MinreyP" target="_new">github.com/MinreyP</a></li>
                        <li><b>Visa: Canada Open Work Permit (1 Year)</b></li>
                    </ul>
                </div>
                <article className={styles.shortDesc}>
                    <p>
                        As a front-end developer with a seasoned background in visual design, I bring a unique blend of skills to create stunning and user-friendly websites. Leveraging my expertise in branding and aesthetics, I seamlessly integrate them with the modern front-end tech stack. I excel in striking the perfect balance between engineering and UI/UX, crafting interfaces that are not only visually appealing but also smooth and accessible.
                    </p>
                </article>
                <div className={styles.leftCol}>
                    <article className={styles.skillsBlock}>
                        <h4 className={styles.blockTitle}>Skills</h4>
                        <h5 className={styles.blockSubTitle}>
                            Web Development
                        </h5>
                        <ul>
                            <li>HTML/CSS/JS</li>
                            <li>Figma</li>
                            <li>React.js</li>
                            <li>Next.js </li>
                            <li>Git</li>
                            <li>Webpack</li>
                            <li>Shopify Liquid</li>
                            <li>Framer</li>
                            <li>WordPress</li>
                            <li>Express.js</li>
                            <li>Node.js</li>
                            <li>GraphQL</li>
                            <li>MongoDB</li>
                        </ul>
                        <h5 className={styles.blockSubTitle}>
                            Collaborative
                        </h5>
                        <ul>
                            <li>Communicative</li>
                            <li>Resourceful</li>
                            <li>Critical thinking</li>
                        </ul>
                    </article>
                    <article className={styles.langBlock}>
                        <h4 className={styles.blockTitle}>Languages</h4>
                        <ul>
                            <li>English(Fluent)</li>
                            <li>Mandarin Chinese(Native)</li>
                            <li>French(Greetings and ordering food)</li>
                        </ul>
                    </article>
                    <article className={styles.eduBlock}>
                        <h4 className={styles.blockTitle}>Education</h4>
                        <h5 className={styles.blockSubTitle}>
                            B.A in Visual Communication Design
                        </h5>
                        <p>Hsuan Chuang University</p>
                        <i>Sep 2008 - May 2011</i>
                        <ul>
                            <li>Web Design</li>
                            <li>Interactive Media</li>
                            <li>Information Design</li>
                        </ul>
                    </article>
                </div>
                <div className={styles.rightCol}>
                    <article className={styles.workExpBlock}>
                        <h4 className={styles.blockTitle}>Work Experience</h4>
                        <h5 className={styles.blockSubTitle}>AkoCommerce
                            <span>Shopify Partner Taiwan</span>
                        </h5>
                        <h5 className={styles.blockSubTitle}>Front-end Developer</h5>
                        <i>Taipei, Taiwan. May 2022 - June 2023</i>
                        <ul>
                            <li>
                                Employed clean and scalable coding practices to enhance code quality and facilitate maintenance using Liquid, JS, React
                            </li>
                            <li>
                                Increased enterprise-level client base by 20% through successful client engagement and project delivery
                            </li>
                            <li>
                                Modularized custom features to optimize website functionality and user experience
                            </li>
                        </ul>
                        <h5 className={styles.blockSubTitle}>AVerMedia
                            <span>Consumer Electronics</span>
                        </h5>
                        <h5 className={styles.blockSubTitle}>Web Designer, Front-end Developer</h5>
                        <i>Taipei, Taiwan. July 2021 - April 2022</i>
                        <ul>
                            <li>
                                Collaborated with cross-functional teams to develop and implement effective product page strategies that accurately communicated the unique selling points of the products
                            </li>
                            <li>
                                Crafted compelling and engaging content for product pages, resulting in increased interest and promotion of newly launched products using CSS, and web animation libraries e.g. GSAP
                            </li>
                        </ul>
                        <h5 className={styles.blockSubTitle}>Jubon-Christies
                            <span>International Luxury Real Estate</span>
                        </h5>
                        <h5 className={styles.blockSubTitle}>Web Designer, Front-end Developer</h5>
                        <i>Taipei, Taiwan. July 2020 - July 2021</i>
                        <ul>
                            <li>
                                Designed high-quality email templates and landing pages to showcase new property listings and effectively engage target audiences by using Figma, HTML, CSS and Jquery
                            </li>
                            <li>
                                Generated a 15% growth in property listing enquiries through the implementation of effective digital marketing initiatives and targeted SEO efforts
                            </li>
                            <li>
                                Utilize WordPress expertise to maintain and update the company's website
                            </li>
                        </ul>
                        <h5 className={styles.blockSubTitle}>DealBerry
                            <span>D2C eCommerce</span>
                        </h5>
                        <h5 className={styles.blockSubTitle}>Lead Visual Designer</h5>
                        <i>Manchester, UK and Remote. Jun 2018 - Apr 2022</i>
                        <ul>
                            <li>
                                Played a pivotal role in repositioning the company's brand image by closely managing the quality and consistency of all visual materials, including packaging, photography, and other marketing collateral
                            </li>
                            <li>
                                Successfully boosted sales by 15% through the implementation of highly effective and visually appealing design strategies that effectively communicated the brand's unique value proposition to target audiences
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default CV;