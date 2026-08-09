import Navbar from "./components/Navbar";
import HeroAbout from "./components/About";
import Projects from "./components/Project";
import TechStack from "./components/TechStack";
import GithubActivity from "./components/GitActivity";
function App() {
  return (
    <>
      <Navbar />
      <HeroAbout />
      <Projects />
      <TechStack />
      <GithubActivity />
    </>
  );
}

export default App;