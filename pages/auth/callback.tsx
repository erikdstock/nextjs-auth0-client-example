import * as React from "react";
import { useRouter } from "next/router";
import { Loading } from "../../components/Loading";
import { Auth0Error } from "auth0-js";
import { singleton as auth, SessionContext } from "../../lib/auth";
import { User } from "../../lib/auth";

const postLogin = router => {
  const postLoginUrl = localStorage.getItem("postLoginUrl");
  localStorage.removeItem("postLoginUrl");
  router.push(postLoginUrl || "/");
};

const CallbackPage: React.FunctionComponent = props => {
  const session = React.useContext(SessionContext);
  const router = useRouter();

  console.log(router);

  React.useEffect(() => {
    console.log();
    if (/access_token|id_token|error/.test(location.hash)) {
      auth
        .handleAuthentication()
        .then((user: User) => {
          session.setUser(user);
          postLogin(router);
        })
        .catch((error: Auth0Error) => {
          // TODO: handle an error like {"error":"invalid_token","errorDescription":"`state` does not match."}
          // maybe set it on the session?
          console.warn("auth0 authentication rejected", error);
          router.push("/");
        });
    }
  }, []);

  return <Loading />;
};

export default CallbackPage;
