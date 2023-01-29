import NextNprogress from "nextjs-progressbar";
import "../styles/main.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="yellow"
        startPosition="0.3"
        stopDelayMs="100"
        height="2"
      />
      <Component {...pageProps} />
      {/* <style jsx global>{`
        bady {
          font-family: "Roboto", sans-serif;
        }
      `}</style> */}
    </>
  );
}
