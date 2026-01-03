import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🎉 Hello World!</h1>
        <p>Andrewpage 全新 React 專案已成功部署！</p>
        <p>部署時間：2026年1月3日</p>
        <button onClick={() => alert('React 按鈕運作正常！')}>
          🧪 測試互動功能
        </button>
      </header>
    </div>
  );
}

export default App;
