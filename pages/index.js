import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey, I'm zeosamaster 👋 I'm a Frontend Engineer based in Portugal</p>
        <p>Here's a nice website made using Next.js</p>
        <p>
          (This is a sample website - you can build a site like this following
          the <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
