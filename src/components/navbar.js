import React, { useState } from 'react'
  
export default function Navbar() {
  const [nav,setNav]=useState(false);
  return (
    <div>
    <nav className="nav-bar">
      <div className="nav-iteml">
            <a className="nav-link" href="/" style={{height:"1px" ,width:"175px"}}><img src="./images/stlogomain.png" alt=""/></a>
      </div>
        <div className="nav-box">
          <ul className={nav ? "navUl active":"navUl"}>
            <li className="nav-items">
              <a className="nav-link" href="/hikayemiz">Hikayemiz</a>
            </li>
            <li className="nav-items">
              <a className="nav-link" href="/pizza">Menu</a>
            </li>
            <li className="nav-items">
             <a className="nav-link" href="/zeytinyag" style={{fontStyle:"italic", color:"#06672f"}}>ZeytinYağları</a>
            </li>
            <li className="nav-items">
              <a className="nav-link" href="/iletisim">İletişim</a>
            </li>
          </ul>
        </div>
        <div className={nav ? "burgernav active":"burgernav" }onClick={nav ?()=> setNav(false):()=>setNav(true)}>
          <div className="cizgi1">
          </div>
          <div className="cizgi2">
          </div>
          <div className="cizgi3">
          </div>
        </div>
    </nav>
    </div>
  )
}
