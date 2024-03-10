import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Header from './Components/Header';
import './App.css';
import AiButton from './Components/AiButton';
import AiButtonV from './Components/AiButtonV';
import LandingPage from './Components/LandingPage';


const App = () => {
  return (
<div className="app-container">
      <div className="header-container">
      <Header />
      </div>
      <Router>
   <Routes>
      <Route path ='*' element={<LandingPage/>} />
      <Route path ='/ChatIA' element={<AiButton/>} />
      <Route path ='/admin-form1' element={<AiButtonV/>} />
      </Routes>
 </Router>
    </div>
  );
};

export default App;
