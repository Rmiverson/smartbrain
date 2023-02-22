import './scss/App.scss';
import React, { useState } from 'react';
import Nav from './components/Nav/Nav.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Rank from './components/Rank/Rank.js'

import ParticlesBg from 'particles-bg';

function App() {
  const [input, setInput] = useState('')

  const onInputChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const onSubmit = () => {
    console.log(input)
  }

  return (
    <div className="App">
      <Nav />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
      <FaceRecognition />
      <ParticlesBg type='polygon' bg={true} />
    </div>
  );
}

export default App;
