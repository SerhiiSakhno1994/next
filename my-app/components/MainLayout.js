import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = "Next App" }) {
  return (
    <>
      <Head>
        <title>{title} / Next curses</title>
      </Head>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/posts"}>Posts</Link>
      </nav>
      <main>{children}</main>
      <style jsx global>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background: red;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        nav a {
          color: #fff;
          text-decoration: none;
        }

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
