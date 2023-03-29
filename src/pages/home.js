import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div>
    <Navbar/>

    <Carousel id="carousel" fade={1} controls={0} interval={2000} className="bigsl">
      <Carousel.Item className='c-item'> 
        <img
          className="d-block w-100 c-img"
          src="images/stpizza.jpeg?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bugün Ne Yiyeceğiz</h3>
          <p>Seventeenden Mükkemmel Pizzalar Tadacağız</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img"
          src="images/stpizza2.jpeg?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>ODUN ATEŞİNDE</h3>
          <p>Seventeenden Mükkemmel Pizzalar Tadacağız</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img"
          src="images/stpizza3.jpeg?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>SEVENTEEN PİZZA</h3>
          <p>
          Seventeenden Mükkemmel Pizzalar Tadacağız
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img"
          src="images/burgerst.jpeg?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>SEVENTEEN PİZZA'DA</h3>
          <p>
          Seventeenden Mükkemmel Steak Burgerde var
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Carousel id="carousel" fade={1} controls={0} interval={2000} className="mobilesl">
      <Carousel.Item className='c-item'> 
        <img
          className="d-block w-100 c-img"
          src="images/stpizzamb.jpg?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bugün Ne Yiyeceğiz</h3>
          <p>Seventeenden Mükkemmel Pizzalar Tadacağız</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img"
          src="images/stpizza2mb.jpg?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>ODUN ATEŞİNDE</h3>
          <p>Seventeenden Mükkemmel Pizzalar Tadacağız</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img"
          src="images/stpizza3mb.jpg?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>SEVENTEEN PİZZA</h3>
          <p>
          Seventeenden Mükkemmel Pizzalar Tadacağız
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img"
          src="images/burgerstmb.jpg?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>SEVENTEEN PİZZA'DA</h3>
          <p>
          Seventeenden Mükkemmel Steak Burgerde var
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <div className='footer sticky'>
      <div className='bottom'>
        <a href="https://www.yemeksepeti.com/istanbul/bahcesehir#sof:2|sob:true" target="blank">
          <img src="images/yemeksepeti.png" alt=''/>
        </a>
        <a href="https://tr.foursquare.com/v/seventeen-pizza/53edcf8f498e5f81fd04d55c" target="blank">
          <img src="images/foursquare.png" alt=''/>
        </a>
        <a href="http://www.tripadvisor.com.tr/Restaurant_Review-g293974-d9746061-Reviews-Seventeen_pizza-Istanbul.html" target="blank">
          <img src="images/tripadvisor.png" alt=''/>
        </a>
        <a href="https://www.zomato.com/tr/istanbul/seventeen-pizza-ba%C5%9Fak%C5%9Fehir-merkez-istanbul" target="blank">
          <img src="images/zomato.png" alt=''/>
        </a>
        <a href="https://www.yelp.com.tr/biz/seventeen-pizza-istanbul" target="blank">
          <img src="images/yelp.png" alt=''/>
        </a>
        <a href="https://www.google.com.tr/maps/place/Seventeen+Pizza/@41.0733966,28.6846301,15z/data=!4m2!3m1!1s0x0:0xcaba65fdcac83f13!6m1!1e1" target="blank">
          <img src="images/googlemaps.png" alt=''/>
        </a>
        <a href="https://www.facebook.com/seventeensteakburger" target="blank">
          <img src="images/facebook.png" alt=''/>
        </a>
        <a href="https://twitter.com/seventeenpizza" target="blank">
          <img src="images/twitter.png" alt=''/>
        </a>
        <a href="https://www.instagram.com/seventeensteakburger/" target="blank">
          <img src="images/instagram.png" alt=''/>
        </a>
        <a href="https://eksisozluk.com/seventeen-pizza--4523903" target="blank">
          <img src="images/eksi.png" alt=''/>
        </a>
      </div>
    </div>
    </div>
  )
}
