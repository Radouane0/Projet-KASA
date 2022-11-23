import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/main.css'
import About from './pages/About'
import Home from './pages/Home'
import Housing from './pages/Housing'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/housing/:id" element={<Housing />}></Route>
                <Route path="/*" element={<Error />}></Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default App
