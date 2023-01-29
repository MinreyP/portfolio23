import Head from 'next/head';
import Layout from "../../components/layout"
import '../styles/globals.css';
import { ContextWrapper } from './api/siteContext';

const _app = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Monkhaus - A Minrey Peng Portfolio</title>
                <meta name="description"
                    content="Minrey is a Taipei-based visual designer/web developer who is always up for an adventure. This site showcases their curated works for potential collaboration opportunities in the future." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Source+Sans+Pro:wght@400;600;700;900&display=swap" rel="stylesheet" />
            </Head>
            <ContextWrapper>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ContextWrapper>
        </>
    );
};

export default _app;
