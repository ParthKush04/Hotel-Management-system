
import './App.css';
import Navbar from './components/Navbar';
import Bookingscreen from './screens/Bookingscreen';
import Homescreen from './screens/Homescreen';
import { BrowserRouter,Route,Link,Routes } from 'react-router-dom';
import Register from './screens/Register'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path = "/home" element = {<Homescreen/>} />
      <Route path = "/book/:roomid" element = {<Bookingscreen/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
