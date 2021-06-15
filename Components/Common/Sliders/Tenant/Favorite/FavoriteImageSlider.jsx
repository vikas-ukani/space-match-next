import Slider from "react-slick";
import { getSmallImageUrl } from "@/utils/image_path";
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
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
}

const FavoriteImageSlider = ({ favoriteImages, setting = {} }) => {
    const properties = { ...settings, ...setting }
    return (
        <div className=" ">
            <Slider {...properties}>
                {favoriteImages.map(spaceImage => {
                    return (
                        <div key={spaceImage.id} className="spaceinner-carousel">
                            <img src={getSmallImageUrl(spaceImage.property_image_path)}
                                className="img-fluid rounded"
                                alt={spaceImage.property_image_name} />
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default FavoriteImageSlider;