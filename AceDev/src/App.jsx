import Sidebar from "./components/Navbar";
import HeroAbout from "./components/About";
import Projects from "./components/Project";
import TechStack from "./components/TechStack";
import GithubActivity from "./components/GitActivity";
import BeyondTheCode from "./components/BeyondCode";


function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <HeroAbout />
        <Projects />
        <TechStack />
        <GithubActivity />
        <BeyondTheCode />
      </main>
      <div className="w-16 shrink-0" aria-hidden="true" />
    </div>
  );
}

export default App;