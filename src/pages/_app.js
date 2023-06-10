import Head from 'next/head';
import Layout from "../../components/Layout"
import '../styles/globals.css';
import { Source_Sans_Pro, Noto_Sans_TC } from '@next/font/google';
import { ContextWrapper } from './api/siteContext';

const sourceSans = Source_Sans_Pro({
    weight: ['400', '600', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    preload: true,
    display: 'block'
})

const notoSans = Noto_Sans_TC({
    weight: ['400', '500', '700'],
    styles: ["normal"],
    subsets: ["latin"],
    preload: false,
    display: 'swap'
})

const _app = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Monkhaus - A Minrey Peng Portfolio</title>
                <meta name="description"
                    content="Minrey is a Taipei-based visual designer/web developer who is always up for an adventure. This site showcases their curated works for potential collaboration opportunities in the future." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <style jsx global>{`
               :root {
                    --font-stacks: ${sourceSans.style.fontFamily}, ${notoSans.style.fontFamily}, 'stystem-ui', sans-serif;
               }
            `}
            </style>
            <ContextWrapper>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ContextWrapper>
        </>
    );
};

export default _app;
