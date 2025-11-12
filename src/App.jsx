import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import { Header } from "./component/Header.jsx";
import Portfoliyo from "./component/Portfoliyo.jsx";
import Services from "./component/Services.jsx";
import Skills from "./component/skills.jsx";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1D3752] text-white">
      <Header />
      <main className="space-y-15 sm:space-y-20 lg:space-y-5">
        <About />
        <Services />
        <Portfoliyo />
        {/* <Skills /> */}
      </main>
      <Contact />
    </div>
  );
}

export default App;
