
import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import { BrowserRouter,Route,Link,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path = "/home" element = {<Homescreen/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
