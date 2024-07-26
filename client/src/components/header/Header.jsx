import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

function Header() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <header>
        {/* Navigation */}
        <h1>
          <Link className="home" to="/">
            GamesPlay
          </Link>
        </h1>
        <nav>
          <Link to="games">All games</Link>
          {isAuthenticated ? (
            <div id="user">
              <Link to="create-game">Create Game</Link>
              <Link to="logout">Logout</Link>
            </div>
          ) : (
            <div id="guest">
              <Link to="login">Login</Link>
              <Link to="register">Register</Link>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
