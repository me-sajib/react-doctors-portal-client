import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold text-secondary uppercase">
            Login
          </h2>
          <form
            className="grid grid-cols-1 gap-3"
            onSubmit={handleSubmit(submit)}
          >
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email Address"
              class="input input-bordered input-md w-full max-w-xs"
            />
            {errors.email && (
              <span className="text-error text-sm font-semibold">
                *Enter your email
              </span>
            )}
            <input
              name="password"
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter Password"
              class="input input-bordered input-md w-full max-w-xs"
            />
            {/* if password not enter then show error msg */}
            {errors.password && (
              <span className="text-error text-sm font-semibold">
                *Enter your password
              </span>
            )}
            <input type="submit" value="login" className="btn btn-primary" />
          </form>
          <div class="divider">OR</div>
          <button class="btn btn-outline" onClick={() => signInWithGoogle()}>
            sign in with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
