import { GetStaticProps } from 'next';
import React from 'react';

import Layout from '../components/Layout';
import Post from '../components/Post';
import { getAllPostsData } from '../lib/post';
import { typeofPosts } from '../types/types';

interface TypeofPosts {
  posts: typeofPosts[];
}

export default function Blog({ posts }: TypeofPosts) {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts &&
          posts.map((post: typeofPosts) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
};
