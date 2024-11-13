import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Rules from './components/Rules';
import GameWithParams from './components/Game'; // 使用 GameWithParams 组件
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/game/:difficulty" element={<GameWithParams />} /> {/* 配置路径 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;