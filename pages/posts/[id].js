import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ data }) {
  return (
    <Layout>
      {data.title}
      <br />
      {data.id}
      <br />
      {data.date}
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllPostIds(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = getPostData(params.id);
  return {
    props: {
      data,
    },
  };
}
