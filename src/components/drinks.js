import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Drinks() {
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
              <h3>İÇECEKLER</h3>
            </div>
            <img src="images/navicecek.jpg" className="menuimg" id="navpizza"></img>
          </div>
          <div className="cesitler">
            <div className="cesitdiv">
              <div className="cesit">
                <div className="cesitisim"><h3>Cesit İsimi</h3></div>
                <div className="cesitücret"><h3>0₺</h3></div>
              </div>
              <div className="cesithakkinda"><h5>Cesit Hakında Özellikler</h5></div>
            </div>
            <div className="cesitdiv">
              <div className="cesit">
                <div className="cesitisim"><h3>Cesit İsimi</h3></div>
                <div className="cesitücret"><h3>0₺</h3></div>
              </div>
              <div className="cesithakkinda"><h5>Cesit Hakında Özellikler</h5></div>
            </div>
          </div>
        </div>
          
        <Footer/>
      </div>  
    </div>
  )
}
