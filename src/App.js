
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/create' element= {<Create/>} ></Route>
       <Route path='/read' element= {<Read/>} ></Route>

      <Route path='/update' element= {<Update/>} ></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
