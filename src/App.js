import Header from "./components/elements/Header/Header.jsx";
import Main from "./components/elements/Main/Main.jsx";
import MyList from "./components/elements/MyList/MyList.jsx";
import { DATA } from './data.js'

function App() {
  return (
    <>
      <Header/>
      <Main movie={DATA[4]}/>
      <MyList/>
    </>
  )
}

export default App;
