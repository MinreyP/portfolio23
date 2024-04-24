import { client } from "lib/client";
import { urlFor } from "lib/imageBuilder";
import { useSiteContext } from "./api/siteContext";
import { getTranslate } from "./api/getTranslate";
import Image from "next/image";
import styles from "../styles/about.module.css";

const about = ({ content }) => {
    const { siteLang } = useSiteContext();

    // grab all content
    const { title, location, description, gallery } = content;
    const aboutTitle = getTranslate(title, siteLang);
    const aboutLocation = getTranslate(location, siteLang);
    const aboutContext = getTranslate(description, siteLang);
    const gallerySources = gallery.map(img => {
        return urlFor(img).url()
    })

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

    const sortedBlocks = assembleHTML(aboutContext);

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>{aboutTitle}</h2>
                <p>✨A Bilingual Fluent in Visual and Programming Languages</p>
                <article className={styles.desc}>
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
                </article>
            </div>
            <div className={styles.marquee}>
                <div className={styles.marquee_content}>
                    {
                        gallerySources.map((img, i) => {
                            return (
                                <div className={styles.marquee_image}>
                                    <Image
                                        key={i}
                                        src={img}
                                        fill={true}
                                        alt={`minrey's street photography: ${img.name}`} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.marquee_content}>
                    {
                        gallerySources.map((img, i) => {
                            return (
                                <div className={styles.marquee_image}>
                                    <Image
                                        key={i}
                                        src={img}
                                        fill={true}
                                        alt={`minrey's street photography: ${img.name}`} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default about;

export async function getStaticProps() {
    const content = await client.fetch(`
    *[_type == "about"][0]
    `);

    return {
        props: {
            content
        }
    }
}