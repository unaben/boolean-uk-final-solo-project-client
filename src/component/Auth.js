import React from "react";
import Signup from "./Signup";
import Login from "./Login";

export const Auth = ({
  setUserId,
  authenticatedUser,
  setAuthenticatedUser,
  IsLoggedin,
  setIsLoggedin
}) => {
  return (
    <>
      <div className="auth">
        {!IsLoggedin ? (
          <Signup
            authenticatedUser={authenticatedUser}
            setAuthenticatedUser={setAuthenticatedUser}
            setIsLoggedin={setIsLoggedin}
          />
        ) : (
          <Login
            authenticatedUser={authenticatedUser}
            setAuthenticatedUser={setAuthenticatedUser}
            setUserId={setUserId}
            setIsLoggedin={setIsLoggedin}
          />
        )}
      </div>
    </>
  );
};
