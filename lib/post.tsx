import { typeofPosts } from '../types/types';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts: typeofPosts[] = await res.json();
  return posts;
}

export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts: typeofPosts[] = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
}

export async function getPostData(id: string) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post: typeofPosts = await res.json();
  // return {
  //   post,
  // };
  return post;
}
