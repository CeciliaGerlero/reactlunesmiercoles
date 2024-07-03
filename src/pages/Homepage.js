import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import '../styles/home.css';

const Homepage = (props) => {


    const settings = {
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        fade: true,
        autoplay: true,

    };


    // <p>hola soy el HOME!!</p>
    return (
        <div className="home">
            <Slider {...settings}>
                <img src="/images/img01.jpg" alt="Imagen 01" />
                <img src="/images/img02.jpg" alt="Imagen 02" />
                <img src="/images/img03.jpg" alt="Imagen 03" />
                <img src="/images/img04.jpg" alt="Imagen 04" />
                <img src="/images/img05.jpg" alt="Imagen 05" />
            </Slider>
        </div>

    )
}

export default Homepage;