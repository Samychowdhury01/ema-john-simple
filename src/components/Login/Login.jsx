import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import googleImage from "../../images/google.png";
import { AuthContext } from "../../Providers/AuthProvider";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

const Login = () => {
  const {} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen">
      <div className="hero-content relative">
        <div className="card rounded-lg md:my-44 form-style drop-shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="text-center text-4xl font-light mb-7">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-12 right-3"
              >
                {showPassword ? (
                  <EyeIcon className="h-6 w-6" />
                ) : (
                  <EyeSlashIcon className="h-6 w-6" />
                )}
              </div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <label className="text-center mt-2">
              <Link to="/signup" className="label-text-alt link link-hover">
                New to Ema-john?
                <span className="text-orange-400"> Create New Account</span>
              </Link>
            </label>
            <div className="relative flex flex-col justify-center items-center mt-7">
              <div className="line"></div>
              <span className="bg-white absolute px-5 py-2">or</span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-8 py-3 border-2 rounded-lg cursor-pointer">
              <img
                src={googleImage}
                alt="sign-in with google"
                className="w-8 h-8"
              />
              <span className="text-base">Continue with Google</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
