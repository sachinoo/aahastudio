import React from "react";
import img1 from "../Images/Slides/01.jpg";
import img2 from "../Images/Slides/02.jpg";
import img3 from "../Images/Slides/03.jpg";
import img4 from "../Images/Slides/04.jpg";
import img5 from "../Images/Slides/05.jpg";
import img6 from "../Images/Slides/06.jpg";
import img7 from "../Images/Slides/07.jpg";
import img8 from "../Images/Slides/08.jpg";
const Home = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={img1} alt="First slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={img2} alt="Second slide" />
        </div>

        <div class="carousel-item">
          <img class="d-block w-100" src={img3} alt="Third slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={img4} alt="Fourth slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={img5} alt="Fifth  slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={img6} alt="Sixth  slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={img7} alt="Seventh  slide" />
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={img8} alt="Eighth  slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Home;
