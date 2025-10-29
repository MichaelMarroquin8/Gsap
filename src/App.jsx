import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "../componets/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
    </main>
  );
}

export default App;
