import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LibraryHeader from './component/LibraryHeader'
import LibraryButton from './component/LibraryButton'
import LibraryBooks from './component/LibraryBooks'
import LibraryFooter from './component/LibraryFooter'
import LibraryLogin from './component/LibraryLogin'
import Office from './component/Office'
import { Routes, Route } from 'react-router'
import Appointment from './component/Appointment'
import Doctor from './component/Doctor'

function App() {
  const libraryHeader = "Library Management System";
  return (
    <div>
      <LibraryHeader/>
      <Routes>
      <Route path="/" element={<LibraryLogin />} />
      <Route path="/office" element={<Office />} />
      <Route path="/books" element={<LibraryBooks />} />
      <Route path='*' element={<LibraryLogin/>} />
      <Route path="/doctor" element={<Doctor/>} />
      <Route path="/appointment" element={<Appointment/>} />
    </Routes>
    </div>
    
  )
}

export default App
