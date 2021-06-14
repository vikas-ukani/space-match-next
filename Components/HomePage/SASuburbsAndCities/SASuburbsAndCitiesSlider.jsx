import Slider from "react-slick";
import { getSmallImageUrl } from "@/utils/image_path";
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
}

const SASuburbsAndCitiesSlider = ({ cities, setting = {} }) => {
    const properties = {
        ...settings, ...setting
    }
    return (
        <div>
            <Slider {...properties}>
                {cities.map(city => {
                    return (
                        <div key={city.id} className="items col-12">
                            <div className="card-city">
                                <a href="{{url( '/city/'.$city->slug)}}">
                                    <div className="card-city-image h-100">
                                        <img src={getSmallImageUrl(city.listing_image_path)} height="100%" width="100%"
                                            className="img-fluid" alt={city.name} />
                                    </div>
                                    <div className="card-city-content ">
                                        <div className="section-title">
                                            <h4 className="title-md">{city.name}</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default SASuburbsAndCitiesSlider;