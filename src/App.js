import './App.scss';
import { MdWbSunny } from "react-icons/md"
import { GoPrimitiveDot } from "react-icons/go"
import { BsArrowRight } from "react-icons/bs"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import Bg from "../src/images/bg.jpg"
import Bg2 from "../src/images/bg-icon.jpg"

function App() {
  return (
    <div className="App">
      <div className='section-1'>
        <div className='upper-card'>
          <div className='upper-card-1'>
            <h4>WA</h4>
            <h5>History <br /> Artists</h5>
          </div>
          <div className='upper-card-2'>
            <h5>Menu</h5>
            <MdWbSunny size={22} />
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
          <div>
            <GoPrimitiveDot size={22} className="dot" />
            <GoPrimitiveDot size={22} className="dot" />
          </div>
        </div>
        <div className='container'>
          <div className='date'>
            <h5>1929 / 1940</h5>
            <h5>110X150.7CM</h5>
          </div>
          <div className='img-border'>
            <img src={Bg2} alt="bg2" />
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
  );
}

export default App;
