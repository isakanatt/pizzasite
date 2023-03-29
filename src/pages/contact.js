import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactForm from '../components/form'

export default function Contact() {
  return (
    <div>
      <Navbar/>
      <div id="pages">
      <h3>Şelale Cad. Akın Sok. No: 1 M Bahçeşehir / Başakşehir / İstanbul</h3>
      <a class="tel" tabindex="-1" href="tel:0212 553 17 17">0212 553 17 17</a>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d751.9504370396937!2d28.684935999999997!3d41.07332600000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7781f86ff51%3A0xcaba65fdcac83f13!2sSeventeen%20Steak%20Burger!5e0!3m2!1str!2sus!4v1679415036773!5m2!1str!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" id="harita" title="seventeen"></iframe>
       
      <ContactForm/>
       
      <Footer/>
      </div>
    </div>
  )
}
