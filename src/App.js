import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Button, Form, Header, Input } from './global/component';
import Home from './home/pages'; 
import { AuthProvider } from './global/auth-context';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
