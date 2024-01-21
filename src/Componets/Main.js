import React from 'react'
import { FaPencil } from "react-icons/fa6";

const Hero = () => {
  return (
    <main className='main'>
      <div className="main-cards">
        <div className="card">
          <div className="card-header">
            <div className="round">

            </div>
            <h3>task assignment colour</h3>
            </div>

            <div className="card-colours-container">
              <div className="colours-point">
              <div className="round-small"><div className="small"></div></div>
              <p>Pink <span> (Default) </span></p>
              </div>
              <div className="colours-point">
              <div className="round-small">
                
              </div>
              <p>Blue</p>
              </div>
              <div className="colours-point">
              <div className="round-small"></div>
              <p>Green</p>
              </div>
              <div className="colours-point">
              <div className="round-small"></div>
              <p>Red</p>
              </div>
              <div className="colours-point">
              <div className="round-small"></div>
              <p>Yellow</p>
              </div>
              
            </div>

            <div className="buttons">
              <button className='btn-card'>Save Colour</button>
              <div className="icons">
                <FaPencil/> Edith Display Name
              </div>
              <h3>Display Name</h3>
              <div className='card-shadow'></div>
              <button className='btn-card'>Save Display Name</button>
            </div>

            <div className="card-bottom-text">
              <p>username:ayeniisaac1on1@gmail.com</p>
            </div>
            <p className='center'>Role:</p>


          </div>
          <div className="card">
            <div className="card2-title">
              <h1>Application</h1>
            </div>
            <div className="card2-text">
              <p>Terms</p>
              <p>Outlook</p>
            </div>
          </div>
        </div>

    </main>
  )
}

export default Hero
