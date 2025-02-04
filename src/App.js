import logo from './logo.svg';
import './App.css';
import { Button, Form, Header, Input } from './global/component';
import Home from './home/pages';
import { AuthProvider } from './global/auth-context';
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Home />
      </div>
    </AuthProvider>
  );
}

export default App;
