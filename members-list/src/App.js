import { BrowserRouter, Routes, Route } from "react-router-dom";

import Members from "./pages/Members";
import Create from "./pages/Create";
import Update from "./pages/Update";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Members/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/update/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;