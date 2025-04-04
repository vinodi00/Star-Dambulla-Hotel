import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function AboutScreen() {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="container1">
                <div className="row justify-content-center">
                    <div className="box col-md-8 m-5 p-5 mb-5 shadow">

                        <div className="container1">
                            <div className="content-section">
                                <div className="content">
                                    <h1>About</h1>
                                    <br />
                                    <p>Discover a tranquil retreat nestled in the heart of Dambulla at Star Dambulla. Just 22 kilometers from the iconic Sigiriya Rock, our hotel offers a haven of comfort and convenience. Indulge in relaxation with our outdoor swimming pool, surrounded by lush greenery, or take a leisurely stroll through our serene garden and unwind on the terrace.</p>
                                    <br />
                                    <p>At Star Dambulla, we pride ourselves on providing exceptional hospitality. Our 3-star hotel boasts air-conditioned rooms, each thoughtfully designed for your comfort and equipped with modern amenities, including complimentary WiFi and a private bathroom. Whether you're here for business or leisure, our attentive staff is available 24/7 at the front desk to cater to your needs.</p>
                                    <br />
                                    <p>Savor delectable culinary delights at our on-site restaurant, where you can enjoy a variety of dishes to tantalize your taste buds. Start your day right with our delicious à la carte breakfast, offering continental or Asian options to suit every palate.</p>
                                    <br />
                                    <p>Explore the rich cultural heritage of the region, with Pidurangala Rock just 25 kilometers away and the iconic Dambulla Cave Temple a mere 2.5 kilometers from our doorstep. For your convenience, Sigiriya Airport is the nearest airport, located just 18 kilometers away.</p>
                                    <br />
                                </div>
                            </div>
                            <div className="image-section col-md-4">
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/523264223.jpg?k=4f9ed97d02af8411958465cc2b7e0d7f1734a3509b0f11a8be156b5072ba9ebb&o=&hp=1" style={{ borderRadius: '25px' }} className="img-fluid" alt="Hotel" />
                            </div>
                            {['auto-start'].map((placement) => (
                                <OverlayTrigger
                                    trigger="click"
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <div className="fixed-bottom" style={{ paddingBottom: '60px', paddingRight: '20px' }}></div>
                                    }
                                >
                                    <div className="position-fixed bottom-0 end-0" style={{ paddingBottom: '50px', paddingRight: '25px' }}>
                                    </div>
                                </OverlayTrigger>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutScreen;
