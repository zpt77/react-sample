import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function Main() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">Page 1</Link>
          </li>
          <li>
            <Link to="/page2">Page 2</Link>
          </li>
          <li>
            <Link to="/page3">Page 3</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/page1' element={<Page1/>} />
        <Route path='/page2' element={<Page2/>} />
        <Route path='/page3' element={<Page3/>} />
      </Routes>
    </div>
  );
}

function HomePage() {
  return <h1>Welcome to My React App!</h1>;
}

export default Main;
