import { MainLayout } from "components/MainLayout";
import Router from "next/router";
export default function About({ data }) {
  console.log(data);
  const linkClicHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout title={"About page"}>
      <ul>
        {data.map((author) => (
          <li key={author.id}>
            {" "}
            <h1>{author.name}</h1>
          </li>
        ))}
      </ul>

      <button onClick={linkClicHandler}>Go back to home</button>
      <button onClick={() => Router.push("/posts")}>Go to posts</button>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const response = await fetch(`http://localhost:4300/authors`);
  const data = await response.json();

  return {
    data,
  };
};
