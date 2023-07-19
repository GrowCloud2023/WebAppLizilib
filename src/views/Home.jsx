import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="login">
        <button className="border-2 border-gray-950 p-5 mx-10" type="button">LOGIN</button>
      </Link>
      <Link to="register">
        <button className="border-2 border-gray-950 p-5 mx-10" type="button">REGISTER</button>
      </Link>
    </div>
  );
};

export default Home;
