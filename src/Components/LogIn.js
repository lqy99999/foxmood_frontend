import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
// import { Redirect } from "react-router";
import { useQuery } from '@apollo/react-hooks';
import {SIGNIN_QUERY} from '../graphql';

const LogIn = ({ setMe, displayStatus }) => {
  const [success, setSuccess] = useState(false)
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, data, refetch } = useQuery(SIGNIN_QUERY, {variables:{ name: name, password: password}});
  // const history = useHistory();

  // function handleClick(path) {
  //   history.push(path);
  // }

  // console.log(["data", data])
  // console.log(["data.signIn", data.signIn])
  useEffect(() => {
    try {
      if(loading) {
        console.log(["loading", loading])
      } else if(error) {
        console.log(["error", error])
      } else {
        console.log(["data", data])
        switch(data.signIn) {
          case "SUCCESS":
            setMe(name)
            setSuccess(true)
            // handleClick('./mood-choice')
            break;
          case "NOT_MATCH":
            displayStatus({
              type: "error",
              msg: "Wrong account/password. Please try again.",
            });
            break;
          case "USER_NOT_FOUND":
            displayStatus({
              type: "error",
              msg: "Couldn't find your account. Please sign up first.",
            });
            break;
          default: 
            break;
        }
      }
     
    } catch (e) {console.log(e)}
  }, [data]);
  
  return(
  <>
    {/* <Redirect to={(success)?"/mood-choice":"/sign-in"} /> */}
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{zIndex: "0"}}>
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Foxmood</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link linklogin" to={"/sign-in"}>Log in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link linksignup" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  <div className="auth-wrapper">
    <div className="auth-left"></div>
      <div className="auth-inner">
        <div class="grid">
          <form action="https://httpbin.org/post" method="POST" class="form login">
            <div class="form__field">
              <label for="login__username"> 
                <svg class="icon">
                  <use href="#icon-user"></use>
                </svg>
                <span class="hidden">Username</span>
              </label>
              <input autocomplete="username" id="login__username" type="text" name="username" class="form__input" placeholder="Username" required 
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    />
            </div>
            <div class="form__field">
              <label for="login__password">
                <svg class="icon">
                  <use href="#icon-lock"></use>
                </svg>
                <span class="hidden">Password</span>
              </label>
              <input id="login__password" type="password" name="password" class="form__input" placeholder="Password" required 
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    />
            </div>
            <div class="form__field">
              <Link className="log-in-submit" to={(success)?"/mood-choice":"/sign-in"}>
                {/* <Redirect to={(success)?"/mood-choice":"/sign-in"} /> */}
                <input  type="submit" value="Log In"
                        onClick={async () => {
                          setName(document.getElementById("login__username").value)
                          setPassword(document.getElementById("login__password").value)
                          if(document.getElementById("login__username").value.trim()===""){
                              displayStatus({
                                  type: "error",
                                  msg: "Please enter a name.",
                              });
                              return;
                          }
                          if(document.getElementById("login__password").value.trim()===""){
                              displayStatus({
                                  type: "error",
                                  msg: "Please enter a password.",
                              });
                              return;
                          }
                          await refetch()
                         ;}}/>
              </Link>
            </div>
          </form>
          <div className="log-in-blank-3"></div>
            <p class="text--center" >Not a member ? 
              <Link className="log-in-submit" to="/sign-up">
                  <a href="#">. Sign up now</a> 
              </Link>
              <svg class="icon">
                  <use href="#icon-arrow-right"></use>
              </svg>
            </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="icons">
          <symbol id="icon-arrow-right" viewBox="0 0 1792 1792">
            <path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" />
          </symbol>
          <symbol id="icon-lock" viewBox="0 0 1792 1792">
            <path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" />
          </symbol>
          <symbol id="icon-user" viewBox="0 0 1792 1792">
            <path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z" />
          </symbol>
        </svg>
      </div>
  </div>
</>);
}
export default LogIn;

