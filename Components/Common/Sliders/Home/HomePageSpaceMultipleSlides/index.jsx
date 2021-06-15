import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpaceImageSlider from "./SpaceImageSlider";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
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

const HomePageSpaceMultipleSlides = ({ spaceDetails, setting = {} }) => {
    const properties = { ...settings, ...setting }
    return (
        <div className=" ">
            <Slider {...properties}>
                {spaceDetails.map(space => {
                    return (
                        <div key={space.id} className="col-12 space-item ">
                            <div className="spaceinner-carousel">
                                <SpaceImageSlider spaceDetail={space} />
                            </div>
                            <div className="space-favorite mt-5 ">
                                <a className="space-like mr-3"  >
                                    <i className={(space.id % 2 == 0) ? "icon icon-heart" : "icon icon-heart-active"} title="Remove as Favourite"></i>
                                </a>
                            </div>
                            <a className="space-title text-truncate" > {space.name}</a>
                            <div className="d-md-flex justify-content-between">
                                <p className="space-address text-truncate">{space.full_address}</p>
                                <p className="space-size">{space.property_size} m²</p>
                            </div>
                            <div className="d-md-flex justify-content-between align-items-center">
                                <p className="space-price">
                                    R
                                    {space.daily_rate && (<>{space.daily_rate} <span className="space-size d-block">per day</span></>)}
                                    {space.weekly_rate && (<>{space.weekly_rate} <span className="space-size d-block">per week</span></>)}
                                    {space.monthly_rate && (<>{space.monthly_rate} <span className="space-size d-block">per month</span></>)}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default HomePageSpaceMultipleSlides;