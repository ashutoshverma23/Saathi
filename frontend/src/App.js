import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./Components/Home/Home";
import Signin from "./Components/SignIn/SignIn";
import Chat from "./Components/Chatbot/Chat";

function App() {
  return (
    <Router>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
