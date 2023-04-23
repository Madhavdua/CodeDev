import './App.css';
import Allcontext from './Components/Allcontext';
import Home from './Components/Home';
import Parent from './Parent';
import {
  HashRouter,
  Route,
  Routes
} from 'react-router-dom'
function App() {


  return (
    <>
      <Allcontext>
        <Parent/>
      </Allcontext>

    </>
  );
}

export default App;
