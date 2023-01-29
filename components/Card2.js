import Image from "next/image";
import { useSiteContext } from "../src/pages/api/siteContext";
import { getTranslate } from "../src/pages/api/getTranslate";
import { urlFor } from "../lib/imageBuilder";
import styles from "../src/styles/Work.module.css";

const Card2 = ({ info }) => {
    console.log(info);
    const { siteLang } = useSiteContext();
    const { page_slug, name_translation } = info;
    const projectName = getTranslate(name_translation, siteLang);

    return (
        <div className={styles.otherWork}>
            <div className={styles.item}>
                <a href={`/work/${page_slug}`} className={styles.cover}>
                    <Image src={urlFor(info.hero_img).url()} fill={true} unoptimized={true} alt={projectName} />
                </a>
                <h6>{projectName}</h6>
            </div>
        </div>
    );
};

export default Card2;