import React from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

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
