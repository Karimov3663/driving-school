import React from 'react'
import { Carousel} from 'react-responsive-carousel'
import './style.css'
import Avto1 from '../../img/avto1.jpg'
import Avto2 from '../../img/avto2.jpg'
import Avto3 from '../../img/avto3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Corusel() {
  return (
    <Carousel autoPlay>
      
            <img src={Avto1} alt="wdw" />
        

            <img src={Avto2} alt="qdqdqd" />
        
            <img src={Avto3} alt="wfw" />
       
    </Carousel>
  )
}

export default Corusel