import { useState, useEffect } from "react";
import Link from "next/link";
import { MainLayout } from "components/MainLayout";
import { useRouter } from "next/router";

export default function Book({ book: serverPost }) {
  const [book, setBook] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:4300/books/${router.query.id}`
      );
      const data = await response.json();
      setBook(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);
  if (!book) {
    return (
      <MainLayout>
        <p>Loading ...</p>
      </MainLayout>
    );
  }
  return (
    <MainLayout title={"Book page"}>
      <img src={book.imgUrl} alt={book.title} />
      <h2>{book.title}</h2>
      <hr />
      <p>
        Жанр :<Link href={`/authors`}>{book.genre}</Link>
      </p>
      <p>{book.descr}</p>
      <Link href={"/posts"}>Back to all posts</Link>
    </MainLayout>
  );
}

Book.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { post: null };
  }
  const res = await fetch(`http://localhost:4300/books/${query.id}`);
  const book = await res.json();

  return {
    book,
  };
};

// export async function getServerSideProps({ query, req }) {
//   // if (!req) {
//   //   return {post: null}
//   // }
//   const res = await fetch(`http://localhost:4300/books/${query.id}`);
//   const book = await res.json();

//   return { props: { book } };
// }
