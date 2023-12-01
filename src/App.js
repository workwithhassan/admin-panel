import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './shared/Sidebar';
import Home from './components/Home';
import Starred from './components/Starred';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/starred' element={<Starred />} />
      </Routes>
    </div>
  );
}

export default App;
