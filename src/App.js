import './App.scss';
import { useRef, useEffect, useState } from 'react';
import { MdWbSunny } from "react-icons/md"
import { GoPrimitiveDot } from "react-icons/go"
import { BsArrowRight } from "react-icons/bs"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Tilt } from 'react-tilt'
import { Power4, Power3, Elastic } from 'gsap/gsap-core';
import gsap from 'gsap';
import Bg from "../src/images/bg.jpg"
import Bg2 from "../src/images/bg-icon.jpg"

function App() {
  const [bgTheme, setBgTheme] = useState(false)

  const defaultOptions = {
    reverse: true,
    max: 15,
    perspective: 1000,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.72,.99)",
  }

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

  console.log(bgTheme === true, "checkTrue")
  return (
    <div className={bgTheme === true ? "light" : "dark"} id="theme">
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
            <div className='content'>
              <div>
                <span>05 / 1904</span>
                <hr />
                <span>01 / 1989</span>
              </div>
              <div className='background'>
                <img src={Bg} alt="bg" />
              </div>
              <div className='image-text'>
                <h5>
                  Nationality: Space <br />
                  Field: Photography, Painting, Drawing <br />
                  Pupils: Carlos Quizpez Asin
                </h5>
              </div>
              <div className='btn'>
                <button>Next Artist
                  <BsArrowRight size={40} />
                </button>
              </div>
            </div>
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
          <div className='container2'>
            <div className='date'>
              <h5>1929 / 1940</h5>
              <h5>110X150.7CM</h5>
            </div>
            <div className='img-border'>
              <Tilt options={defaultOptions} style={{ height: "100%", width: "100%" }}>
                <img src={Bg2} alt="bg2" />
              </Tilt>
            </div>
            <div className='price'>
              <div className='objects'>
                <h4>The Prasistence <br /> of memory</h4>
                <div>
                  <h5>
                    Date: 1939<br />
                    Style: Surrealism<br />
                    Genre: Symbolic Painting<br />
                    Media: Space
                  </h5>
                </div>
              </div>
              <hr />
              <div className='total'>
                <h6>Price</h6>
                <h3>$18.680</h3>
              </div>
              <div className='btns'>
                <button>
                  <IoIosArrowBack size={32} />
                </button>
                <span>182</span>
                <button>
                  <IoIosArrowForward size={32} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
