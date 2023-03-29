import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Oliveoils() {
  return (
    <div>
      <Navbar/>
      <div id="pages">
        <div id='aileyagdiv'>
        <img src="images/aileyag.jpg" className="aileyag"></img> 
        <img src="images/seventeen-zeytinyagiyesil.png" id="styazı"></img>
        </div>
        <div className="zeytinyagiyazi">
          <h1 className="zyyazı">Çeşnili Sızma Zeytinyağı</h1>
          <p className="zyyazı">Ayvalık yöresinin en iyi zeytinyağları, özenle yıkanarak kurutulan bitki ve meyve kabuklarında uzun süre demlenerek üretilmiştir. Aroma veya katkı maddesi içermemektedir.</p>
        </div>
        <div className="zyagicesitler">
          <div className="zcesitcontainer">
            <div className="zcesit"> <img src="images/feslegen-zeytinyagi.jpg"></img> <p>Fesleğen çeşnili <br/>natürel sızma zeytinyağı<br/> 500 ml</p></div>
            <div className="zcesit"> <img src="images/limon-zeytinyagi.jpg"></img> <p>Limon çeşnili <br/>natürel sızma zeytinyağı<br/> 500 ml</p></div>
            <div className="zcesit"> <img src="images/portakal-zeytinyagi.jpg"></img> <p>Portakal çeşnili <br/>natürel sızma zeytinyağı<br/> 500 ml</p></div>
            <div className="zcesit"> <img src="images/biberiye-zeytinyagi.jpg"></img> <p>Biberiye çeşnili <br/>natürel sızma zeytinyağı<br/> 500 ml</p></div>
            <div className="zcesit"> <img src="images/cesnili-zeytinyagi.jpg"></img> <p>Acı Biber çeşnili <br/>natürel sızma zeytinyağı<br/> 500 ml</p></div>
            <div className="zcesit"> <img src="images/kutu.jpg"></img> <p>Özel Kutu</p></div>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  )
}
