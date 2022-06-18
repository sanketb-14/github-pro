import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from'./components/layout/Navbar'
import Home from './pages/Homes'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Footer from './components/layout/Footer'
import {GithubProvider} from './context/github/GithubContext'

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App
