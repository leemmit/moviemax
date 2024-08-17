import MoviePage from "./pages/MoviePage";
import Header from "./components/elements/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotificationPage from "./pages/NotificationPage";
import ListMoviePage from "./pages/ListMoviePage";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [movieId, setMovieId] = useState(0);

  return (
    <>
      <Router>
          <Header onSearchChange={setSearchValue}/>
          <Routes>
              <Route exact path="/" Component={NotificationPage} />
              <Route exact path="/list" Component={() => <ListMoviePage searchValue={searchValue} onMovieIdChange={setMovieId} />} />
              <Route exact path="/movie" Component={() => <MoviePage movieId={movieId} />} />
          </Routes>
      </Router>
      
    </>
  )
}

export default App;
