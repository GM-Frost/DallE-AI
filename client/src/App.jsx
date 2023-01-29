import React from 'react'
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import {logo, nayanLogo} from './assets'
import {Home, CreatePost} from './pages'

const App = () => {
  return (
   <BrowserRouter>
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
      <Link to='/' className='flex items-center w-full md:w-auto '>
          <img src={nayanLogo} alt='nayan-logo' className='py-4 mx-4 w-28 object-contain'></img>
      </Link>
      <Link to='/' className='flex items-center w-full md:w-auto '>
          <img src={logo} alt='logo' className='py-12 mx-4 w-28 object-contain' ></img>
      </Link>
    
      <Link to='/create-post' className='font-inter font-medium bg-[#5a5dc2] text-white px-4 py-2 rounded-md'>Create
      </Link>
    </header>

    <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create-post' element={<CreatePost/>}/>
      </Routes>
    </main>
   </BrowserRouter>
  )
}

export default App