import MoviePage from "./pages/MoviePage";
import Header from "./components/elements/Header/Header";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ListMoviePage from "./pages/ListMoviePage";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import Footer from "./components/elements/Footer/Footer";

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [movieId, setMovieId] = useState(0);

  return (
    <>
      <Router>
          <Header onSearchChange={setSearchValue}/>
          <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route exact path="/home" Component={() => <HomePage onMovieIdChange={setMovieId} />} />
              <Route exact path="/list" Component={() => <ListMoviePage searchValue={searchValue} onMovieIdChange={setMovieId} />} />
              <Route exact path="/movie" Component={() => <MoviePage movieId={movieId} />} />
          </Routes>
          <Footer/>
      </Router>
      
    </>
  )
}

export default App;
