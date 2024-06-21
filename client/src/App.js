
import './App.css';
import Navbar from './components/Navbar';
import Bookingscreen from './screens/Bookingscreen';
import Homescreen from './screens/Homescreen';
import { BrowserRouter,Route,Link,Routes } from 'react-router-dom';
import Registerscreen from './screens/Registerscreen'
import Loginscreen from './screens/Loginscreen';
import Profilescreen from './screens/Profilescreen';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path = "/home" element = {<Homescreen/>} />
      <Route path = "/book/:roomid/:fromdate/:todate" element = {<Bookingscreen/>}/>
      <Route path = "/register" element = {<Registerscreen/>}/>
      <Route path = "/login" element = {<Loginscreen/>}/>
      <Route path = "/profile" element ={<Profilescreen/>}/>
      
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
