import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Members from "./pages/Members";
import Create from "./pages/Create";
import Update from "./pages/Update";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <nav className="navbar navbar-expand-sm bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" to="/">Clubhous3</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Members List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">Add New Member</Link>
              </li>
            </ul>
          </div>
        </nav>

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