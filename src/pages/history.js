import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function History() {
  return (
    <div>
      <Navbar/>
      <div id="pages">

        <div className="historycards">
          <div className="h-cards tq"> 
            <h2>KÖMÜR ATEŞİNDE <br/>
            EFSANE STEAK BURGER</h2>
            <img src='images/burgerstmb.jpg' alt=""/>
            <p>%100 dana etinden yapılan hamburger köftesi kömür ateşinde gerçek ızgara tadı ile eşsiz bir lezzete dönüşüyor. Günlük yapılan mis gibi hamburger ekmeklerini en taze hali ile servis ediyoruz.</p>
          </div>
          <div className="h-cards yg"> 
            <h2>EN TAZE MALZEMELER,<br/>
            GERÇEK MOZZARELLA PEYNİRİ</h2>
            <img src='images/gercekmozarellapeyniriV3.jpg' alt=""/>
            <p>Pizzadaki tüm malzemelerin lezzetini ayrı ayrı hissedebilmek özel bir ustalık ister. Lezzeti dengeleyen en önemli malzeme mozzarella peyniridir. Seventeen Pizza olarak, tüm pizzalarımızı en kaliteli mozzarella peyniriyle hazırladığımızı belirtmek isteriz.</p>
          </div>
          <div className="h-cards pr"> 
            <h2>ODUN ATEŞİNDE<br/>
            GERÇEK PİZZA LEZZETİ</h2>
            <img src='images/stpizza3mb.jpg' alt=""/>
            <p>Gerçek bir pizzayı lezzetli yapan temel unsur hiç şüphesiz odun ateşidir. Seventeen Pizza'da, pizzalarımızın tamamını özenle hazırlıyor, odun fırında pişiriyor ve olması gerektiği gibi tam kıvamındayken servise hazır hale getiriyoruz.</p>
          </div>
          <div className="h-cards ab"> 
            <h2>HER DAMAK TADINA<br/>
            FARKLI BİR PİZZA</h2>
            <img src='images/fumekaburgaHikaye2.jpg' alt=""/>
            <p>Seventeen Pizza, Margherita'dan Napoletana'ya 21 farklı pizza çeşidiyle benzersiz lezzetler sunuyor. Damak tadınıza uygun gerçek bir pizza deneyimi için Seventeen Pizza'dan dilediğinizi seçin.</p>
          </div>
        </div>

        
        <Footer/>
      </div>
    </div>
  )
}
