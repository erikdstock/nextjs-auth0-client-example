import Head from "next/head";
import Header from "./Header";
import { useAuth } from "../lib/auth";

function Layout({ children }) {
  const { user, isLoading } = useAuth();
  return (
    <>
      <Head>
        <title>
          {isLoading ? "Loading..." : `Hello ${user?.profile?.nickname}`} (NEXT)
        </title>
      </Head>

      <Header />

      <main>
        <div className="container">{children}</div>
        <pre>{isLoading ? "Loading..." : JSON.stringify(user, null, 2)}</pre>
      </main>

      <style jsx>{`
        .container {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
        main pre {
          padding: 0.5rem;
          min-height: 4rem;
          max-width: 42rem;
          border-radius: 0.2rem;
          margin: 1rem auto;
          overflow-x: scroll;
          color: green;
          background: black;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          color: #333;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
      `}</style>
    </>
  );
}

export default Layout;
