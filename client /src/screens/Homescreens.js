import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import GoogleMap from '../components/GoogleMap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Chatbottheme from "../components/Chatbottheme";
import React from 'react'
function Homescreens() {
  return (
    <div><Carousel data-bs-theme="light">
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/523247997.jpg?k=5eb85d2fa27d70aad5fefed2912902ece0431be3feee717b853b42a3e6bfb07f&o=&hp=1"
            alt="First slide"
        />
        <Carousel.Caption>

            <h5>Welcome to Your Home Away from Home : Star dambulla- Where Comfort Meets Luxury</h5>
            <p>Indulge in the ultimate experience of comfort and luxury at [Star Dambulla]. From the moment you step through our doors, you'll be enveloped in a world of unparalleled hospitality. Our meticulously designed rooms and suites offer a perfect blend of modern amenities and classic charm, ensuring that every moment of your stay is filled with relaxation and tranquility. Whether you're here for business or leisure, our dedicated staff is committed to providing you with personalized service that exceeds your expectations. Discover why [Star Dambulla] is not just a destination, but a journey of unforgettable experiences</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/494719934.jpg?k=de3674558a4fc700880088d389889b77391632239cfdffa6ea247f43a34e38c4&o=&hp=1"
            alt="Second slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/528958796.jpg?k=ff8092f807b11e070ece3fe47f4dbd2baeb2b7a9519ad5df5d775e57bf0152a8&o=&hp=1"
            alt="Third slide"
        />
    </Carousel.Item>
</Carousel>
 <br /> <br /> <br /> <br />
<Container>
    <h1>Our Rooms</h1>
    <br/>
    <p>The rooms at this accommodation are designed with guest comfort and convenience in mind, offering a range of amenities to ensure a pleasant stay.

Each room is equipped with air conditioning to provide a comfortable climate regardless of the weather outside. The private bathrooms feature essential facilities including a toilet, shower, towels, and complimentary toiletries, offering convenience and privacy for guests.

For added comfort, guests can enjoy amenities such as a seating area, desk, and clothes rack, providing space for relaxation and organization during their stay.

Additionally, rooms may feature outdoor views with access to a terrace or garden, allowing guests to soak in the natural surroundings and enjoy moments of tranquility.

Whether traveling solo, as a couple, or with family, various room options are available including family rooms for larger groups.</p>
    <br /> <br /> <br />
    <Row>
        <Col xs={6} md={4}>
            <Image src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/523066296.jpg?k=9b2252a6c2daa88b12874110cd77fd01949fd3c3405fe8c7d9fb3f772ca8444e&o=&hp=1" thumbnail />
        </Col>
        <Col xs={6} md={4}>
            <Image src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/523264223.jpg?k=4f9ed97d02af8411958465cc2b7e0d7f1734a3509b0f11a8be156b5072ba9ebb&o=&hp=1" thumbnail />
        </Col>
        <Col xs={6} md={4}>
            <Image src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/523264585.jpg?k=eff9107ae5f1e178732fb3040acff3c596b23ea4f72090e7ab8cdf111614fe0a&o=&hp=1" thumbnail />
        </Col>
    </Row>
</Container>


 <br /> <br /> <br /> <br />
<GoogleMap />
<br /> <br /> <br /> <br />
<Container>
    <h1>Facilities</h1>
    <br/>
    <p>This accommodation offers a comprehensive array of amenities and services to ensure a comfortable and convenient stay.

For dining, guests can indulge in delicious meals at the on-site restaurant, offering a variety of dishes to suit different tastes.


Parking is hassle-free with free private parking available on site, eliminating any worries about finding a spot or additional charges.
Rooms are equipped with essential amenities such as air conditioning, ensuring a pleasant climate throughout your stay. Private bathrooms provide convenience and privacy, stocked with toiletries and towels for your comfort.

The property boasts free WiFi in public areas, allowing guests to stay connected during their visit.

For those looking to explore the area, services like car hire and a 24-hour front desk are available to assist with any needs or inquiries.

General amenities include family-friendly features such as non-smoking rooms and family rooms, as well as accessibility features like rooms located on the ground floor.

Guests can also enjoy outdoor amenities like a terrace, garden, and outdoor swimming pool, offering relaxation and enjoyment amidst natural surroundings.

Overall, this accommodation provides a well-rounded experience with its range of amenities, services, and thoughtful touches to cater to the needs of its guests.</p>
   <br /> <br /> <br />
    <Row>
        <Col xs={6} md={4}>
            <Image src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/523071405.jpg?k=e896eaf596087762a2bc72bbd7bfe43855c623f974117feecbac39c91c4ddc61&o=&hp=1" thumbnail />
        </Col>
        <Col xs={6} md={4}>
            <Image src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/523264139.jpg?k=1617e1d67d0f6e9b256ce022a9c6d82bc48b354d3b41f0d8dfc4b29d73d2538b&o=&hp=1" thumbnail />
        </Col>
        <Col xs={6} md={4}>
            <Image src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/523264184.jpg?k=f2511e3fab99e7965972683434ba892d02e870c3ed0899258bfa331d7f3040c8&o=&hp=1" thumbnail />
        </Col>
    </Row>
</Container>

{['auto-start'].map((placement) => (
    <OverlayTrigger
        trigger="click"
        key={placement}
        placement={placement}

        overlay={
            <div className="fixed-bottom" style={{ paddingBottom: '60px', paddingRight: '20px' }}><Chatbottheme /></div>

        }

    >
        <div className="position-fixed bottom-0 end-0" style={{ paddingBottom: '50px', paddingRight: '25px' }}>

            <button className="btn rounded-circle shadow-lg" data-bs-toggle="modal" data-bs-target="#exampleModall" style={{
                width: '60px',
                height: '60px',
                borderRadius: '60px'
            }} ><i className="fas fa-robot" style={{ fontSize: '25px' }} ></i></button>
        </div>
    </OverlayTrigger>

))}
</div>
  )
}

export default Homescreens;
