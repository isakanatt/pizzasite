import React from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const sendEmail=(e) =>{
    e.preventDefault();

    emailjs.sendForm('service_47jsej1', 'template_9s2144g', e.target, '9elLugAPo0oUMljlA');
    alert("Mesajınız Başarıyla Gönderildi!..");
  }

  return (
    <div>
      <div class="container">
        <form id="contact" onSubmit={sendEmail}>
            <h2>Aşağıdaki formu doldurarak bize ulaşabilir, görüş ve önerilerinizi iletebilirsiniz.</h2>
            <div class="form-items">
                <input placeholder="Adınız Soyadınız" type="text" name="user_name" required autofocus/>
            </div>
            <div class="form-items">
                <input placeholder="E-Posta Adresiniz" type="email" name="user_email" required/>
            </div>
            <div class="form-items">
                <input placeholder="Telefon Numaranız" type="tel" name="phone"required autofocus/>
            </div>
            <div class="form-items">
                <textarea placeholder="Lütfen Mesajınızı Buraya Yazın.." required name='message'></textarea>
            </div>
            <div class="form-items">
                <button name="submit" type="submit" id="submit">GÖNDER</button>
            </div>
        </form>
      </div>
    </div>
  )
}
