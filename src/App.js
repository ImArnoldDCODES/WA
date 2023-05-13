import './App.scss';
import { useRef, useEffect, useState } from 'react';
import { MdWbSunny } from "react-icons/md"
import { GoPrimitiveDot } from "react-icons/go"
import { Power4, Power3, Elastic } from 'gsap/gsap-core';
import gsap from 'gsap';
import SpaceImage from './component/getSpaceImgs';
import { GetImage } from './component/getImage';

function App() {
  const [bgTheme, setBgTheme] = useState(false)
  const tl = useRef()

  useEffect(() => {
    let ctx = gsap.context(() => {

      tl.current = gsap.timeline()
        .from(".upper-card-1", 1.8, {
          ease: Power4.easeInOut,
          y: -100
        })
        .from(".upper-card-2", 1.5, {
          ease: Power4.easeInOut,
          y: -100
        }, "-=1")
        .from(".upper-card-3", 1.5, {
          ease: Power4.easeInOut,
          y: -100
        }, "-=1")
        .from(".container", 1.5, {
          ease: Elastic.easeOut.config(0.9, 0.45),
          opacity: 0,
          x: -100
        }, "-=1")
        .from(".container2", 1.5, {
          ease: Elastic.easeOut.config(0.9, 0.25),
          opacity: 0,
          x: 100
        }, "-=1")
        .from([".upper-card-1 h4", ".upper-card-1 h5", ".upper-card-2 h5", ".sunny", ".upper-card-3 h5", ".dots"], 1, {
          ease: Power3.easeInOut,
          y: -70,
        }, "-=2")
    })
    return () => ctx.revert()
  }, [])

  return (
    <div>
      <div className="App">
        <div className='section-1'>
          <div className='upper-card'>
            <div className='upper-card-1'>
              <h4>WA</h4>
              <h5>History <br /> Artists</h5>
            </div>
            <div className='upper-card-2'>
              <h5>Menu</h5>
              <MdWbSunny size={22} className='sunny' onClick={() => setBgTheme(!bgTheme)} />
            </div>
          </div>
          <div className='container'>
            <h2>Salvador</h2>
            <h4>Dali
              <p>Surrealism</p>
            </h4>
            <SpaceImage />
          </div>
        </div>
        <div className='section-2'>
          <div className='upper-card-3'>
            <h5>Intro</h5>
            <div className='dots'>
              <GoPrimitiveDot size={22} className="dot" />
              <GoPrimitiveDot size={22} className="dot" />
            </div>
          </div>
          <GetImage />
        </div>
      </div>
    </div>
  );
}

export default App;
