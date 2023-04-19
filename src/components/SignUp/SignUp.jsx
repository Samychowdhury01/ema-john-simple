import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleImage from "../../images/google.png";

const SignUp = () => {
    const [errorMessage, setErrorMessage] =useState('')


  const handleRegister = (event) => {

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;

    setErrorMessage('')

    // password validation
    if(password !== confirmPassword){
        setErrorMessage("password didn't match")
        return
    }
    else if(!/(?=.*[A-Z])/.test(password)){
        setErrorMessage("add at least one UPPERCASE")
        return
    }
    else if(!/(?=.*[!@#$&*])/.test(password)){
        setErrorMessage("add at least one special character")
        return
    }
    else if(!/(?=.*[0-9].*[0-9])/.test(password)){
        setErrorMessage("add at least two Number")
        return
    }
    else if(password.length > 6){
        setErrorMessage("your password should be 6 character or longer")
        return
    }
    else if(/(?=.*[a-z].*[a-z].*[a-z])/){
        setErrorMessage("your password must contains 3 small letter")
        return
    }


    
  };

  return (
    <div className="min-h-screen">
      <div className="hero-content relative">
        <div className="card rounded-lg md:my-44 form-style drop-shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-center text-4xl font-light mb-7">Sign Up</h1>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
            </div>
            {/* for showing the error */}
            <p className="mt-5 text-red-500 text-center">{errorMessage}</p>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <label className="text-center mt-2">
              <Link to="/signup" className="label-text-alt link link-hover">
                Already have an account?
                <span className="text-orange-400"> Login</span>
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

export default SignUp;
