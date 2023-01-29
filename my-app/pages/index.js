import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "components/MainLayout";
export default function Index() {
  return (
    <MainLayout title={"Home page"}>
      <h1>Hello Next.JS!</h1>
      <p>
        <Link href={"/about"}>About</Link>
      </p>
      <p>
        <Link href={"/posts"}>Posts</Link>
      </p>
      <p>Заказчик не всегда может сразу дать дизайнеру уже подготовленные</p>
    </MainLayout>
  );
}
