import Image from "next/image";
import { useState } from "react";
import { useSiteContext } from "../api/siteContext";
import { getTranslate } from "../api/getTranslate";
import { urlFor } from '../../../lib/imageBuilder';
import { client } from "../../../lib/client";
import Card2 from "../../../components/Card2";
import styles from "../../styles/Work.module.css";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FsLightbox from "fslightbox-react";

const workDetail = ({ details }) => {
    const [toggler, setToggler] = useState(false);
    const { siteLang } = useSiteContext();
    // console.log(details);

    // sort data
    const projectName = getTranslate(details.name_translation, siteLang);
    const shortDescript = getTranslate(details.short_descript, siteLang);
    const textContent = getTranslate(details.description, siteLang);
    const { stack, hero_img, quick_links, gallery, category } = details;
    const otherWorks = category.works;

    const assembleHTML = (content) => {
        let htmlMock = content.map(block => {
            let style = block.style;
            if (style === 'h2' || style === 'h3') {
                return { tag: 'title', text: block.children[0].text }
            }
            else {
                return { tag: 'para', text: block.children[0].text }
            }
        })
        return htmlMock
    }

    let sortedBlocks = assembleHTML(textContent);
    let gallerySources = gallery.map(img => {
        return urlFor(img).url()
    })

    return (
        <>
            <FsLightbox
                toggler={toggler}
                sources={gallerySources} />
            <div className="container">
                <a href="/work" className={styles.infoBtn}>
                    <HiOutlineArrowNarrowLeft />
                    {
                        siteLang === 'en' ? <span>Back To Showcase</span> :
                            <span>返回所有作品</span>
                    }
                </a>
                <h1 className={styles.pageTitle}>{projectName}</h1>
                <p>{shortDescript}</p>
                <div className={styles.workHero}>
                    <Image
                        alt={`${projectName}-hero-image`}
                        src={urlFor(hero_img).url()} fill priority unoptimized={true} />
                </div>
                <div className={styles.detailLayout}>
                    <div className={styles.description}>
                        {
                            sortedBlocks.map((block, i) => {
                                if (block.tag === 'para') {
                                    return (<p key={`para-${i}`}>{block.text}</p>)
                                }
                                if (block.tag === 'title') {
                                    return (<h5 key={`title-${i}`}>{block.text}</h5>)
                                }
                            })
                        }
                    </div>
                    <div className={styles.quickLinks}>
                        <h6>Quick Links</h6>
                        <ul>
                            {
                                quick_links.live_demo ? <li><a href={quick_links.live_demo} target="_blank">Live</a></li> : ''
                            }
                            {
                                quick_links.source_code ? <li><a href={quick_links.source_code} target="_blank">Source Code</a></li> : ''
                            }
                        </ul>
                    </div>
                    <div className={styles.stack}>
                        <h6>Stack</h6>
                        <ul>
                            {
                                stack.map(item => <li key={item}>{item}</li>)
                            }
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
                {
                    gallerySources.map((img, i) => {
                        return (<SwiperSlide key={i} onClick={() => setToggler(!toggler)}>
                            <Image
                                src={img} fill={true} alt={`${projectName}-gallery-${i}`} unoptimized={true} />
                        </SwiperSlide>)
                    })
                }
            </Swiper>
            <div className="container">
                <h5 className={styles.subtitle}>All Works In the Category</h5>
                {
                    otherWorks === null && <h6>I'm working on it...</h6>
                }
                {
                    otherWorks !== null &&
                    <div className={styles.otherWork}>
                        {otherWorks.map(work => <Card2 info={work} key={work._id} />)}
                    </div>
                }
                <a href="/work" className={styles.infoBtn}>
                    <HiOutlineArrowNarrowLeft />
                    {
                        siteLang === 'en' ? <span>Back To Showcase</span> :
                            <span>返回所有作品</span>
                    }
                </a>
            </div>
        </>
    );
};

export default workDetail;

export async function getStaticPaths() {

    const allWorks = await client.fetch(`
        *[_type == "work"]
    `)

    const paths = allWorks.map((work) => ({
        params: { id: work.page_slug },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1

    const details = await client.fetch(
        `*[_type == "work" && page_slug == "${params.id}"]
            {
                _id, client, description, gallery, hero_img, name_translation, stack, short_descript, quick_links,
                category->{works[]->{_id, name_translation, page_slug, hero_img}}
            }[0]
        `
    )

    return {
        props: { details },
        revalidate: 1,
    }
}
