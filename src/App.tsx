import React from 'react';
import './App.scss';
import 'react-bootstrap';

import { Image } from 'react-bootstrap';
import { MenuItemsType, Sidebar } from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';

import { Home } from 'react-feather';
import { Book } from 'react-feather';
import { GitBranch } from 'react-feather';

import photo from './data/Photo.jpg'; 
import PageInDevelopment from './components/PageInDevelopment';

export function HeaderPlaceholder() {
  return (
    <div className='text-center'>
      <div className='side-icon '>
          <Image src={photo} width="150" height="150" className='photo' />

        {/* <div className='ui-icon'>
          <Image src="https://cdn-icons-png.flaticon.com/512/3230/3230393.png"
            width="50" height="50" className='icon' />
        </div> */}
      </div>
    </div>
  );
}

export function MobileHeaderPlaceholder(pageName?: string) {
  return (
    <>
      <Image src="https://cdn-icons-png.flaticon.com/512/3230/3230393.png" width="50" height="50" className='icon' />
      <span className='ps-3'>{pageName}</span>
    </>
  );
}

export const menuItems: MenuItemsType[] = [
  { to: '/', title: 'home', icon: <Home /> },
  { to: '/blog', title: 'blog', icon: <Book /> },
  { to: '/map', title: 'roadmap', icon: <GitBranch /> },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/blog" element={<PageInDevelopment />}></Route>
          <Route path="/map" element={<PageInDevelopment />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
