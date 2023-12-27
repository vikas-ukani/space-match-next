import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { getSmallImageUrl } from "../../../utils/image_path";
import { settings } from "./SliderDefaultSettings";

const CitiesCardSilkSlider = ({ cities, setting }) => {
    const properties = { ...settings, ...setting }
    return (
        <div className=" mt-5">
            <Slider {...properties}>
                {cities.map(city => {
                    return (
                        <div key={city.id} className="items  col-12">
                            <div className="card-city">
                                <Link href={'/city/' + city.slug} >
                                        <div className="card-city-image">
                                            <img src={getSmallImageUrl(city.listing_image_path)}
                                                className="img-fluid" alt={city.name} />
                                        </div>
                                        <div className="card-city-content">
                                            <div className="section-title">
                                                <h4 className="title-md">{city.name}</h4>
                                            </div>
                                        </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div >
    );
}
export default CitiesCardSilkSlider;