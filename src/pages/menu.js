import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Menu() {
  return (
    <div>
      <Navbar/>
      <div id="pages" className="menüdiv">
        <div>
          <div className="navmenü">
            <div className="menü-nav">
            <ul>
              <li>
                  <a class="selected" href="./pizza">PİZZALAR</a>
              </li>
              <li>
                  <a class="" href="./burger">BURGERLER</a>
              </li>
              <li>
                  <a class="" href="./baslangic">BAŞLANGIÇLAR</a>
              </li>
              <li>
                  <a class="" href="./tatli">TATLILAR</a>
              </li>
              <li>
                  <a class="" href="./icecek">İÇECEKLER</a>
              </li>
            </ul>
        </div>
          </div>
          <div className="activemenü">
            <div className="menütitles active">
              <h2>PİZZALAR</h2>
            </div>
          </div>
        </div>
          
        <Footer/>
      </div>  
    </div>
  )
}
