import React, { useContext } from "react";

import Layout from "../components/Layout";
import { useAuth, SessionContext } from "../lib/auth";
// import { useFetchUser } from '../lib/user'

function Home() {
  const { user, isLoading } = useContext(SessionContext);

  React.useEffect(() => {
    console.log("doing effect");
    console.log(user, isLoading);
  }, [user?.isLoggedIn]);
  return (
    <Layout>
      <h1>Next.js and Auth0 Example</h1>

      {isLoading && <p>Loading login info...</p>}

      {!isLoading && !user && (
        <>
          <p>
            To test the login click in <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to click in{" "}
            <i>Profile</i> and <i>Logout</i>
          </p>

          <h4>Rendered user info on the client</h4>
          <img src={user.profile?.picture} alt="user picture" />
          <p>nickname: {user.profile?.nickname}</p>
          <p>name: {user.profile?.name}</p>
        </>
      )}
    </Layout>
  );
}

export default Home;
