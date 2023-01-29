import { client } from "../../lib/client"
import styles from "../styles/Work.module.css";
import Card from "../../components/Card";

const work = ({ selectedWorks }) => {

    return (
        <div className="container">
            <h1 className={styles.pageTitle}>WORK
                {
                    selectedWorks ? <span className={styles.workNum}>0{selectedWorks.length}</span> : ''
                }
            </h1>
            <p>These are selected from recent works</p>
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
        </div>
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