
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Router from './Router/Router';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <div className="container my-5">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
