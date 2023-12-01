import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './shared/Sidebar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}

export default App;
