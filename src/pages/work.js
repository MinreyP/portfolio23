import { client } from "../../lib/client"
import styles from "../styles/Work.module.css";
import Card from "../../components/Card";
import { motion } from "framer-motion";

const work = ({ selectedWorks }) => {

    return (
        <motion.div
            initial={{ opacity: 0, x: "20%" }}
            animate={{ opacity: 1, x: "0" }}
            transition={{
                duration: 3,
                delay: 0.3,
                type: "spring",
                stiffness: 80
            }}
            className="container">
            <motion.h1
                initial={{ opacity: 0, x: "20%" }}
                animate={{ opacity: 1, x: "0" }}
                transition={{
                    duration: 3,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 70
                }}
                className={styles.pageTitle}>WORK
                {
                    selectedWorks ? <span className={styles.workNum}>0{selectedWorks.length}</span> : ''
                }
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, x: "20%" }}
                animate={{ opacity: 1, x: "0" }}
                transition={{
                    duration: 3,
                    delay: 0.6,
                    type: "spring",
                    stiffness: 70
                }}>
                These are selected from recent works</motion.p>
            {
                selectedWorks.length > 0 &&
                <div className={styles.cardContainer}>
                    {
                        selectedWorks.map(work => {
                            return <Card key={work._id} info={work} />
                        })
                    }
                </div>
            }
        </motion.div>
    );
};

export default work;

export async function getStaticProps() {
    const selectedWorks = await client.fetch(`
    *[_type == "selected_works"]{
        name, _id,
        work->{tags, page_slug, quick_links,client,category->{name}}
    }
    `);

    return {
        props: {
            selectedWorks
        }
    };
}