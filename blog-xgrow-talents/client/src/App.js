import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Pages/Home/Home.js'
import NavBar from './components/Layout/NavBar/NavBar.js';
import Footer from './components/Layout/Footer/Footer.js';
import Login from './components/Pages/Login/Login.js'
import Register from './components/Pages/Register/Register.js';
import Post from './components/Pages/Post/Post.js'

function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/post/:postId" element={<Post />}/>
                </Routes>
            </BrowserRouter>
            <Footer />
    </div>
  );
}

export default App;
