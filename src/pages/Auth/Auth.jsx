import React, { useState, useContext } from "react";
import clases from "./auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Datacontext } from "../../Components/DataProvider/DataProvider";
import ClipLoader from "react-spinners/ClipLoader";
import { type } from "../../Utility/Action.type";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate= useNavigate()
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const { state, dispatch } = useContext(Datacontext);
  const user = state.user;

  
  console.log(user);
  const authHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.name)
    if (e.target.name == "sign in") {
      // firebase
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate("/")
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });

      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };
  return (
    <section className={clases.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={clases.login_container}>
        <h1>Sign in</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            className={clases.login_signInButton}
            name="sign in"
          >
            {loading.signIn ? <ClipLoader color="*000" size={15} /> : "Sign in"}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing in you agree to the AMAZON FAKE CLONE conditions of use &
          sale. please see our privacy Notice, our Cookies Notice and our
          Interest-Baside Ads Notice.
        </p>
        {/* create acount button */}
        <button
          type="submit"
          onClick={authHandler}
          className={clases.login__registerBUtton}
          name="sign up"
        >
          {loading.signUp ? (
            <ClipLoader color="*000" size={15} />
          ) : (
            "Create your Amazon Acount"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}
export default Auth;
