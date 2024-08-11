import MoviePage from "./pages/MoviePage";
import Header from "./components/elements/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotificationPage from "./pages/NotificationPage";
import ListMoviePage from "./pages/ListMoviePage";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      {/* <MoviePage/> */}
      <Router>
          {/* <Header onSearchChange={setSearchValue}/> */}
          <Header onSearchChange={setSearchValue}/>
          <Routes>
              <Route exact path="/" Component={MoviePage} />
              <Route exact path="/list" Component={() => <ListMoviePage searchValue={searchValue} />} />
              <Route exact path="/notification" Component={NotificationPage} />
          </Routes>
      </Router>
      
    </>
  )
}

export default App;
