import './App.css';
import SearchPage from './components/SearchPage';
import Home from './pages/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<SearchPage/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
