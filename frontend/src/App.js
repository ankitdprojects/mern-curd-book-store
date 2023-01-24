import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Books from './Pages/Books';
import AddBooks from './Pages/AddBooks';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/books' element={<Books />}></Route>
        <Route exact path='/addbook' element={<AddBooks />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
