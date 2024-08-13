import './App.css';
import MainForm from './components/MainForm';
import PortalForm from './components/PortalForm';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<MainForm/>}/>
        <Route path='/portal'element={<PortalForm/>}/>
      </Routes>      
    </div>
  );
}

export default App;
