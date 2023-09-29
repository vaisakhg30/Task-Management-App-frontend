import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Task from './components/Task';
import Add from './components/Add';
import Edit from './components/Edit';
import View from './components/View';

function App() {
  return (
    <div className="App">
    <Header/> 
    <Routes>
      <Route path='/' element={<Task/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/edit/:email' element={<Edit/>}/>
      <Route path='/view/:email' element={<View/>}/>



      


    </Routes>
    

    </div>
  );
}

export default App;
