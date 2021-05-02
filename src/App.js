import {useContext} from "react";
import About from "./components/about";
import Header from "./components/header";
import Login from "./components/loginPage";
import Contact from "./components/contact";
import Help from "./components/help";
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
  } else if(view === "contact"){
    return (
      <div className="App">
        <Header/>
        <Contact/>
      </div>
    );
  } else if(view === "help"){
    return (
      <div className="App">
        <Header/>
        <Help/>
      </div>
    );
  }

  
}

export default App;
