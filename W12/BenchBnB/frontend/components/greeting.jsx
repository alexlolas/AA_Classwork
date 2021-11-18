import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({currentUser, logout}) => {
  console.log(currentUser)
  if (currentUser) {
    return (
      <div>
      <h2 >Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
      </div>
    )
  } else {
    return (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up!</Link>
      </div>
    )
  }
}
export default Greeting