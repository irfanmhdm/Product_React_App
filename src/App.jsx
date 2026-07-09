import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addproduct from './components/Addproduct'
import Search from './components/Search'
import Delete from './components/Delete'
import Viewproducts from './components/Viewproducts'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <BrowserRouter>
    
    <Routes>
    
    
    <Route path ='/' element={<Navbar />}></Route>

    <Route path ='/addproduct' element={<Addproduct />}></Route>
    <Route path ='/search' element={<Search />}></Route>

    <Route path ='/delete' element={<Delete />}></Route>

    <Route path ='/viewproducts' element={<Viewproducts />}></Route>



    
    
    

    
    





    </Routes>
    
    
    </BrowserRouter>
   
    </>
  )
}

export default App
