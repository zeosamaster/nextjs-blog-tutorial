import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import {
  getAllPostIds,
  getPostData,
  PostDataWithHtml,
  PostParams,
} from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

interface Props {
  data: PostDataWithHtml;
}

export default function Post({ data }: Props) {
  const { title, date, contentHtml } = data;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async function () {
  return {
    paths: getAllPostIds(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async function ({
  params,
}: PostParams) {
  const data: PostDataWithHtml = await getPostData(params.id);
  return {
    props: {
      data,
    },
  };
};
