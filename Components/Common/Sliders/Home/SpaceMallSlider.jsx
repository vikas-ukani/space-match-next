import Slider from 'react-slick'
import Link from "next/link";

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

const SpaceMallSlider = ({ spaceMall, setting = {} }) => {
    const properties = { ...settings, ...setting }

    return (
        <div className="col-xl-12">
            <Slider {...properties}>
                {spaceMall.map(mall => {
                    return (
                        <div key={mall.id} className="items ">
                            <Link href={'/mall/' + mall.slug} >
                                    <img src={mall.image_path} className="img-fluid" alt={mall.name} />
                                    <div className="card-city-content">
                                        <div className="section-title">
                                            <h4 className="title-md">
                                                ̥{mall.name}
                                            </h4>
                                        </div>
                                    </div>
                            </Link>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default SpaceMallSlider;