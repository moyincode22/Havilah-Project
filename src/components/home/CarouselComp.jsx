import Carousel from 'react-bootstrap/Carousel';

function CarouselComp() {
  return (
    <Carousel data-bs-theme="dark" className='girls'>
      <Carousel.Item>
        <img
          className="girl-1"
          src={"./images/image 2.png"}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="girl-2"
          src={"./images/image3.png"}
          alt="Second slide"
        /> 
         
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>  */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>  */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="girl-3"
          src={"./images/image 5.png"}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5> */}
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
  );
}

export default CarouselComp;