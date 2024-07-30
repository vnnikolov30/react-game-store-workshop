import { Routes, Route } from "react-router-dom";
import CreateGame from "./components/create-game/CreateGame";
import EditGame from "./components/edit-game/EditGame";
import GameCatalogue from "./components/game-catalogue/GameCatalogue";
import GameDetails from "./components/game-details/GameDetails";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { useState } from "react";
import { AuthContextProvider } from "./contexts/authContext";
import Logout from "./components/logout/Logout";

function App() {
  return (
    <AuthContextProvider >
      <>
        <div id="box">
          <Header />

          {/* Main Content */}
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="logout" element={<Logout />} />
              <Route path="register" element={<Register />} />
              <Route path="/create-game" element={<CreateGame />} />

              {/* <Route path='/' element={<EditGame />}/>*/}
              <Route path="/games" element={<GameCatalogue />} />
              <Route path="/games/:gameId/details" element={<GameDetails />} />
            </Routes>
          </main>
        </div>
      </>
    </AuthContextProvider>
  );
}

export default App;
