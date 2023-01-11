import { Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/HomePage";
import Designpage from "./pages/DesignPage";
import Uiuxpage from "./pages/UiuxPage";
import Projectpage from "./pages/ProjectPage";
import Certificationpage from "./pages/CertificationPage";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence initial={true} mode="wait">
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/design" element={<Designpage />} />
            <Route path="/uiux" element={<Uiuxpage />} />
            <Route path="/project" element={<Projectpage />} />
            <Route path="/certification" element={<Certificationpage />} />
          </Routes>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
