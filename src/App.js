import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './MCR1/pages/Home';
import Search from './MCR1/pages/Search';
import HabitList from './MCR2/pages/HabitList';
import HabitCard from './MCR2/components/HabitCard';
import HabitView from './MCR2/pages/HabitView';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/myhabits' element={<HabitList/>}/>
        <Route path='/habitdetails/:id' element={<HabitView/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
