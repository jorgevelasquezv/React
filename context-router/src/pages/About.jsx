import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const About = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="container text-center mt-5">
      <h1>About</h1>
      {!user ? (
        <h2> Please Login</h2>
      ) : (
        <div className="m-5">
          <h3>
            Nombre: {user.data.first_name} {user.data.last_name}
          </h3>
          <h3>Email: {user.data.email}</h3>
          <img className="m-3"
            src={user.data.avatar}
            alt={user.data.id}
            width="150px"
            height="150px"
          />
        </div>
      )}
    </div>
  );
};

export default About;
