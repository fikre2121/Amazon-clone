import React, { useState,useContext } from 'react'
import clases from "./auth.module.css"
import { Link } from 'react-router-dom'
import{auth} from "../../Utility/Firebase"
import{signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import {Datacontext} from "../../Components/DataProvider/DataProvider"
import { type } from '../../Utility/Action.type'
 function Auth() {
  const[email,setEmail]=useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
// console.log(password,email)
const { state, dispatch } = useContext(Datacontext);
const user = state.user;

console.log(user)
const authHandler=(e)=>{
e.preventDefault()
// console.log(e.target.name)
if(e.target.name =="sign in"){
// firebase
signInWithEmailAndPassword(auth, email, password)
  .then((userInfo) => {
    dispatch({
      type: type.SET_USER,
      user: userInfo.user,
    });
  })
  .catch((err) => {
    console.log(err);
  });
}else{

  createUserWithEmailAndPassword(auth, email, password)
    .then((userInfo) => {
      dispatch({
        type: type.SET_USER,
        user: userInfo.user,
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
}
  return (
    <section className={clases.login}>
      {/* logo */}
      <Link>
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
            {" "}
            Sign in
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
          Create your Amazon Acount
        </button>
      </div>
    </section>
  );
}
export default Auth
