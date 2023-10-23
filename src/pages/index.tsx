import Head from "next/head";
import { useCmsPageData } from "utils/useCmsPageData";
import { DynamicStoryblokComponent } from "@/components/Layout/DynamicStoryblokComponent/DynamicStoryblokComponent";
import Layout from "../components/Layout";

export default function Home() {
  const story = useCmsPageData();

  return (
    <div>
      <Head>
        <title>Akasa Dark Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <DynamicStoryblokComponent blok={story} />
      </Layout>
    </div>
  );
}
