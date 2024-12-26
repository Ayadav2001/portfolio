import Navbar from "./Component/Navbar/Navbar";
 import Intro from "./Component/Intro/Intro";
 import Contact from './Component/Contact/Contact';
 import Skills from './Component/Skills/Skills';
 import Work from './Component/Work/Working';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
     </div>
  )
}

export default App;
