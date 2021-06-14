import Link from "next/link";
import Slider from "react-slick";

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

const ShoppingCenterShowCaseSlider = ({ malls, setting = {} }) => {
    const properties = { ...settings, ...setting }
    return (
        <>
            <Slider {...properties} >
                {malls && malls.map(mall => {
                    return (
                        <div className="items p-2" key={mall.id}>
                            <div className="card-city card-mall">
                                <Link href={'/mall/' + mall.slug} >
                                    <a>
                                        <img height="100%" width="100%" src={mall.image_path} className="img-fluid" alt={mall.name} />
                                        <div className="card-city-content">
                                            <div className="section-title">
                                                <h4 className="title-md">
                                                    {mall.name}
                                                </h4>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </>
    );
}

export default ShoppingCenterShowCaseSlider;