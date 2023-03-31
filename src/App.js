import './scss/App.scss';
import React, { useState } from 'react';
import Cookies from 'universal-cookie'
import Nav from './components/Nav/Nav.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Rank from './components/Rank/Rank.js'

import ParticlesBg from 'particles-bg';
import Signin from './components/Signin/Signin';

function App() {
  const [input, setInput] = useState('')
  const cookies = new Cookies()

  // useEffect(() => {

  // }, [])

  const onInputChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const onSubmit = () => {
    console.log(input)
  }

  if (!cookies.get('loggedUser')) {
    return (
      <div className='App'>
      {/* make signup */}
        <Signin cookies={cookies} />
      </div>
    )
  } else {
    return (
      <div className='App'>
        <Nav />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
        <FaceRecognition />
        <ParticlesBg type='polygon' bg={true} />
      </div>
    )    
  }
}

export default App;
