import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Work.module.css";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FsLightbox from "fslightbox-react";

const workDetail = () => {
    const [toggler, setToggler] = useState(false);

    return (
        <>
            <FsLightbox
                toggler={toggler}
                sources={[
                    "/DailyQuote-1.jpg",
                    "/DailyQuote-2.jpg",
                    "/DailyQuote-3.jpg",
                    "/DailyQuote-4.jpg"
                ]} />
            <div class="container">
                <a href="/work" className={styles.infoBtn}>
                    <HiOutlineArrowNarrowLeft />
                    <span>Back To All Works</span>
                </a>
                <h1 className={styles.pageTitle}>Daily Quote</h1>
                <p>Get a quote today as your daily dose of inspiration and motivation</p>
                <div className={styles.workHero}>
                    <Image
                        src="/DailyQuote-1.jpg" fill={true} />
                </div>
                <div className={styles.detailLayout}>
                    <div className={styles.description}>
                        <p>Daily Quote is an app that generates random quotes for your daily inspiration. You can shuffle, save and share the quotes you like on social media, you can also change a category if you want to. The theme colour changes every time after you changed a category of quotes.</p>
                        <h5>Chanllenges</h5>
                        <p>
                            The start off was bumpy because it’s not just my first React project started from scratch, but also it’s my first time using styled-components with it. I struggled the hell through how to give the SVG logo dynamic colour which is based on the theme colour using styled-components.
                            I also spent a decent amount of time figuring out the best way to organise the files so I won’t get lost as the project gets more complex.

                        </p>
                    </div>
                    <div className={styles.stack}>
                        <h6>Stack</h6>
                        <ul>
                            <li>Adobe XD</li>
                            <li>React</li>
                            <li>Styled-components</li>
                            <li>Local Storage</li>
                            <li>Vercel</li>
                        </ul>
                    </div>
                    <div className={styles.quickLinks}>
                        <h6>Quick Links</h6>
                        <ul>
                            <li><a href="#">Live</a></li>
                            <li><a href="#">Source Code</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Swiper
                spaceBetween={50}
                breakpoints={{
                    640: {
                        width: 640,
                        slidesPerView: 1
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2
                    },
                    960: {
                        width: 960,
                        slidesPerView: 3
                    }
                }}
            >
                <SwiperSlide onClick={() => setToggler(!toggler)}>
                    <Image
                        src="/DailyQuote-1.jpg" fill={true} />
                </SwiperSlide>
                <SwiperSlide onClick={() => setToggler(!toggler)}>
                    <Image
                        src="/DailyQuote-2.jpg" fill={true} />
                </SwiperSlide>
                <SwiperSlide onClick={() => setToggler(!toggler)}>
                    <Image
                        src="/DailyQuote-3.jpg" fill={true} />
                </SwiperSlide>
                <SwiperSlide onClick={() => setToggler(!toggler)}>
                    <Image
                        src="/DailyQuote-4.jpg" fill={true} />
                </SwiperSlide>
            </Swiper>
            <div className="container">
                <h5 className={styles.subtitle}>Other Works</h5>
                <div className={styles.otherWork}>
                    <div className={styles.item}>
                        <a href="#" className={styles.cover}>
                            <Image src="/monkhaus-cafe-cover.jpg" fill={true} />
                        </a>
                        <h6>AVer Media Product Page</h6>
                    </div>
                    <div className={styles.item}>
                        <a href="#" className={styles.cover}>
                            <Image src="/monkhaus-cafe-cover.jpg" fill={true} />
                        </a>
                        <h6>AVer Media Product Page</h6>
                    </div>
                    <div className={styles.item}>
                        <a href="#" className={styles.cover}>
                            <Image src="/monkhaus-cafe-cover.jpg" fill={true} />
                        </a>
                        <h6>AVer Media Product Page</h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default workDetail;