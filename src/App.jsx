import React from 'react'
import { Navbar, Hero, Feature, GameList, Slider, News, Service, Socials, Users } from './components/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

const App = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
              <Navbar />  
              <Hero />

              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Feature /> 
                </div>
              </div>

              <div className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <GameList />
                  <News />
                  
                </div>
              </div>

              <div className='w-full h-full relative'>
                <Service 
                  heading3 = "Download Games"
                  heading2 = "Games hidden from the internet"
                  description = "Hidden games on the internet can be a treasure trove for gamers looking for new challenges."
                  button_text = "View Games"
                  button_link = "#"
                  data = {service_multiple_image}
                  reverse = {false}
                  icon_reverse = {false}
                />
                <Service 
                  heading3 = "Awesome Videos"
                  heading2 = "Watch video without interruptions"
                  description = "Hidden games on the internet can be a treasure trove for gamers looking for new challenges."
                  button_text = "View More"
                  button_link = "#"
                  data = {service_single_image}
                  reverse = {true}
                  icon_reverse = {true}
                />
              </div>
              
              <div className='w-full h-full relative'>
                <Socials />
                <Users />
              </div>
          </>}>
            <Route index element={<Navbar />} />
            <Route path="/login" element={<Navbar />} />
            <Route path="contact" element={<Navbar />} />
            <Route path="*" element={<Navbar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App