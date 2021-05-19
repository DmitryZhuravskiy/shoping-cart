import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <header>
    <div className="overlay"></div>
      <nav>
        <h2>Shop</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li>
            <a href="#"><ion-icon name="basket-outline"></ion-icon>Card</a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default App;
