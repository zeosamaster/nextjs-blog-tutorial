import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData, PostData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export const getStaticProps: GetStaticProps = async function () {
  const posts: PostData[] = getSortedPostsData();

  return {
    props: {
      posts,
    },
  };
};

interface Props {
  posts: PostData[];
}

export default function Home({ posts }: Props) {
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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }: PostData) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
