import React from "react";
import Link from "next/link";

const Posts = ({ posts = [] }) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <h2>{post.title}</h2>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
}
