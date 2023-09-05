import './App.css'
import Newsletter from './components/Newsletter'
import Success from './components/Success';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('')

  return (
    <div className='body'>
      <Routes>
        <Route index element={<Newsletter email={email} setEmail={setEmail}/>}/>
        <Route path={'/success'} element={<Success email={email} setEmail={setEmail}/>}/>
      </Routes>
      
    </div>
  )
}

export default App
