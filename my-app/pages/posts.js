import Link from "next/link";
import { useState, useEffect } from "react";
import { MainLayout } from "components/MainLayout";
import Router from "next/router";
import Head from "next/head";
export default function Posts({ posts: serverPost }) {
  const [posts, setPosts] = useState(serverPost);

  useEffect(() => {
    async function load() {
      const res = await fetch("http://localhost:4300/books");
      const json = await res.json();
      setPosts(json);
    }
    if (!serverPost) {
      load();
    }
  }, []);
  if (!posts) {
    return (
      <MainLayout>
        <p>Loading ...</p>
      </MainLayout>
    );
  }
  const linkClicHandler = () => {
    Router.push("/");
  };
  return (
    <MainLayout title={"Posts page"}>
      <h1>Post Page</h1>
      <ul>
        {posts.map((book) => (
          <li key={book.id}>
            <Link href={`/book/[id]`} as={`/book/${book.id}`}>
              {book.title}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={linkClicHandler}>Go back to home</button>
      <button onClick={() => Router.push("/posts")}>Go to posts</button>
    </MainLayout>
  );
}

//post/42

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null };
  }
  const res = await fetch(`http://localhost:4300/books`);
  const posts = await res.json();

  return {
    posts,
  };
};
