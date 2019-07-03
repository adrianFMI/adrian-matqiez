import React from 'react';
const Carousel = () => (
  <div className="bd-example carouselSize">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
  </ol>
  <div className="carousel-inner">

    <div className="carousel-item active">
      <img src="../images/friendlyChat.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block black">
        <h5>Friendly-chat-firebase</h5>
        <p><a href="https://friendlychat-e2c60.firebaseapp.com/" target="_blank">Click here</a></p>
      </div>
    </div>

    <div className="carousel-item">
      <img src="../images/drumkit.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Drum kit JavaScript</h5>
        <p><a href="../JavaScript30/01-JavaScriptDrumKit/index-START.html" target="_blank">Click here</a></p>
      </div>
    </div>

    <div className="carousel-item">
      <img src="../images/introhtml.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First Practices</h5>
        <p><a href="../HTML_intro/divandSpan.html" target="_blank">Basic Web page </a>
        <a href="../html_intro/registrationForm.html" target="_blank"> Form Practice</a>
        <a href="../html_intro/index.html" target="_blank"> firebase</a>
        </p>
      </div>
    </div>

    <div className="carousel-item">
      <img src="../images/gridDesign.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>CSS grid design</h5>
        <p><a href="../css-desigh/index.html" target="_blank">Grid design </a>
        <a href="../css-desigh/shapes.html" target="_blank"> Shapes</a>
        </p>
      </div>
    </div>

  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
  </div>
)

export default Carousel;
