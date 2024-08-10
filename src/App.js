import MoviePage from "./pages/MoviePage";
import Header from "./components/elements/Header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotificationPage from "./pages/NotificationPage";

function App() {
  return (
    <>
      {/* <MoviePage/> */}
      <Header/>
      <Router>
          <Routes>
              <Route exact path="/" Component={MoviePage} />
              <Route exact path="/home" Component={HomePage} />
              <Route exact path="/notification" Component={NotificationPage} />
          </Routes>
      </Router>
      
    </>
  )
}

export default App;
