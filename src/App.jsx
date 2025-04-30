import { useState } from 'react';
import './App.css'
import { StylizedLoadingBar } from './components/LoadingScreen';
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <StylizedLoadingBar onComplete={() => setIsLoaded(true)}/>}
    </>
  );
}

export default App
