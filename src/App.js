import {useContext} from "react";
import About from "./components/about";
import Header from "./components/header";
import Login from "./components/loginPage";
import {ControlViewsContext} from "./context/controlViews";


function App() {

  const {views} = useContext(ControlViewsContext);
  const {view} = views;

  if(view === "about"){
    return(
      <div className="App">
        <Header/>
        <About/>
      </div>
    )
  } else if(view === "home"){
    return (
      <div className="App">
        <Header/>
        <Login/>
      </div>
    );
  }

  
}

export default App;
