import React from "react";
import Signup from "./Signup";
import Login from "./Login";

export const Auth = ({
  setUserId,
  authenticatedUser,
  setAuthenticatedUser,
  login,
  setLogin
}) => {
  return (
    <>
      <div className="auth">
        {!login ? (
          <Signup
            authenticatedUser={authenticatedUser}
            setAuthenticatedUser={setAuthenticatedUser}
            setLogin={setLogin}
          />
        ) : (
          <Login
            authenticatedUser={authenticatedUser}
            setAuthenticatedUser={setAuthenticatedUser}
            setUserId={setUserId}
            setLogin={setLogin}
          />
        )}
      </div>
    </>
  );
};
