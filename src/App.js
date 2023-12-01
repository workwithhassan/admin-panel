import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./shared/Sidebar";
import Home from "./components/Home";
import Starred from "./components/Starred";
import Page from "./components/add-new/Page";

function App() {
  return (
    <div className="">
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        </Routes>
      </Sidebar>
      <Routes>
        <Route path="/new-page" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
