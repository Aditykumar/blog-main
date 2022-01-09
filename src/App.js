import './Components/Style/Style.css';
import Header from './Components/Header';
import Home from'./Components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Bollywood from './Components/Catagory/Bollywood';
import Hollywood from './Components/Catagory/Hollywood';
import Fitness from './Components/Catagory/Fitness';
import Food from './Components/Catagory/Food';
import Technology from './Components/Catagory/Technology';
import ArtReading from './Components/ArtReading';
import {DataProvider} from './Components/Catagory/CatContext'
function App() {
  return (
    <div >
    <DataProvider>
      <Router>
       <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/artReading/:id' element={<ArtReading/>}/>
            <Route path='/bollywood' element={<Bollywood/>}/>
            <Route path='/hollywood' element={<Hollywood/>}/>
            <Route path='/technology' element={<Technology/>}/>
            <Route path='/fitness' element={<Fitness/>}/>
            <Route path='/food' element={<Food/>}/>
          </Routes>
    </Router>
   </DataProvider>
    </div>
  );
}

export default App;
