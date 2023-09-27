import Navbar from "./components/navbar/navbar";
import Inicio from "./components/inicio/inicio";
import Skills from "./components/skills/skill";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Inicio/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
