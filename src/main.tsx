import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Greeting from './components/Greeting.tsx'
import MyForm from './components/MyForm.tsx'
import ZustandSample from './components/ZustandSample.tsx';
import WindowSize from './components/WindowSize.tsx'
import PermanentUserName from './components/PermanentUserName.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App>
      <Greeting />
      <MyForm placeholder='Enter your name' />
      <ZustandSample /> 
      <WindowSize />
      <PermanentUserName />
    </App>
  </StrictMode>
);
