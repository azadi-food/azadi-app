import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/common/Header.js';
import Main from './components/common/Main.js';
import Footer from './components/common/Footer.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
