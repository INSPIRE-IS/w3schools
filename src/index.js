import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import '../src/css/App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


export default function App() {
  
  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todos" element={<Todos />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);