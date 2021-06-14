import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const inner_arrow__css = {
    height: "24px",
    width: "24px",
    borderRadius: "24px",
    backgroundColor: "rgb(174 174 174 / 30%)",
    display: "flex !important",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "-50px",
    transform: "translateY(-50%)",
    zIndex: "1",
    cursor: "pointer",
}
const PrevArrow = ({ className, style, onClick }) => (
    <div className="" style={{
        ...style,
        ...inner_arrow__css,
        top: "-70px",
        height: "28px",
        width: "28px",
        backgroundColor: "rgba(0,0,0,.1)",
        left: "20px"
    }}
        onClick={onClick}
    >
        {/* slick-arrow-parent right  */}
        <i className={"icon icon-small-chevron-right "}  ></i>
        {/*  */}
    </div>
)

const NextArrow = ({ className, style, onClick }) => (
    <div className="" style={{
        ...style,
        ...inner_arrow__css,
        top: "-70px",
        height: "28px",
        width: "28px",
        backgroundColor: "rgba(0,0,0,.1)",
        right: "20px",
    }}
        onClick={onClick}
    >
        <i className={"icon icon-small-chevron-left "}></i>
    </div >
)
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
}
const SpaceImageSlider = ({ spaceDetail, setting = {} }) => {
    const properties = { ...settings, ...setting }

    return (
        <Slider {...properties}>
            {spaceDetail.spacePropertyImages.map(spaceImage => {
                return (
                    <div key={spaceImage.id} className="space-image-item">
                        <a href="">
                            <img style={{ height: "50vh", }} width="100%" src={spaceImage.property_image_path} className="img-fluid rounded"
                                alt={spaceImage.property_image_name} />
                        </a>
                    </div>
                )
            })}
        </Slider>
    );
}

export default SpaceImageSlider;