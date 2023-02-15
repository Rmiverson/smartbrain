import './scss/App.scss';

import Nav from './components/Nav';
import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition';

function App() {
  return (
    <div className="App">
      <Nav />
      <Logo />
      <ImageLinkForm />
      <FaceRecognition />
    </div>
  );
}

export default App;
