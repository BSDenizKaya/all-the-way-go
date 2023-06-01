import React from "react";
import { Navbar, Footer, PostCard } from "../components";
import { getPosts } from "../services";
import Head from "next/head";

function Posts({ posts }) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Navbar />
      <div>
        {posts.map(post => <PostCard post={post.node} key={post.title} />)}
      </div>
      <Footer />
    </>
  );
}

export default Posts;


export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}