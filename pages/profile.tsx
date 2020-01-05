import React, { useContext } from "react";

// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
// import { useFetchUser } from '../lib/user'
import Layout from "../components/Layout";
import { useAuth, SessionContext } from "../lib/auth";
import { Session } from "inspector";

function ProfileCard({ user }) {
  return (
    <>
      <h1>Profile</h1>

      <div>
        <h3>Profile </h3>
        <img src={user.picture} alt="user picture" />
        <p>nickname: {user.nickname}</p>
        <p>name: {user.name}</p>
      </div>
    </>
  );
}

function Profile() {
  const { user, isLoading } = useAuth();

  return (
    <Layout>
      {isLoading ? <>Loading...</> : <ProfileCard user={user.profile} />}
    </Layout>
  );
}

export default Profile;
