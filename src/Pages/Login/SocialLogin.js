import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from || { pathname: "/" };
  // navigate previous page if user is already logged in
  useEffect(() => {
    if (gUser) {
      navigate(from, { replace: true });
    }
  }, [gUser, navigate, from]);

  return (
    <>
      {
        //   if loading, show loading
        gLoading && <Loading />
      }

      <button class="btn btn-outline" onClick={() => signInWithGoogle()}>
        sign in with google
      </button>
    </>
  );
};

export default SocialLogin;
