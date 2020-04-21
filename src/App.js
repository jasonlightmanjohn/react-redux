import React from 'react';
//import logo from './logo.svg';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <PostForm />
      <hr />
      <Posts />
      <hr />
    </div>
  );
}

export default App;
