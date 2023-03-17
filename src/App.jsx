import React from 'react'
import { Navbar, Home, Games, Login, NotFound } from './components/index'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import styles from "./style";

import { toram_online, genshin_impact, minecraft, tower_of_fantasy, watching_video } from './assets';

// Static Services Component 
const service_multiple_image = [
    { src: toram_online, alt: 'Image 1' },
    { src: genshin_impact, alt: 'Image 2' },
    { src: minecraft, alt: 'Image 3' },
    { src: tower_of_fantasy, alt: 'Image 4' },
]

const service_single_image = [
  { src: watching_video, alt: 'Video' }
]

const URI_PATH_HOME = import.meta.env.VITE_URI_PATH_HOME

const App = () => {

  return (
    <div className="w-full overflow-hidden bg-gray-900">
      <BrowserRouter>
        <Routes>

          <Route path={`${URI_PATH_HOME}`} element={<><Navbar path={URI_PATH_HOME} /> <Outlet/></>}>
              <Route index element={<Home />} />
              <Route path="games" element={<Games />} />
          </Route>  

          <Route path={`${URI_PATH_HOME}/login`} element={<Login/>} />
          <Route path={`*`} element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App