import { useState } from "react";
import "./App.css";

import Aside from "./components/aside";
import SobreMi from "./paginas/sobre-mi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-general-app">
    <SobreMi></SobreMi>
    </div>
  );
}

export default App;
