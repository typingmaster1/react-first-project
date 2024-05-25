import Introduction from "./components.jsx/Introduction";
import Header from "./components.jsx/Header";
import About from "./components.jsx/About Me";
import Portfolio from "./components.jsx/Portfolio";
import Projects from "./components.jsx/Projects";
import Contact from "./components.jsx/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  
  return (
<>
<Header></Header>
<Introduction></Introduction>
<About></About>
<Portfolio></Portfolio>
<Projects></Projects>    
<Contact></Contact>    
    

    </>
  )
}
export default App;
