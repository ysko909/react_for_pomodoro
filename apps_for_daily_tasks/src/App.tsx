import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';

function App() {
  return (
    <div>
      <h1>Hello React Router v6</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
