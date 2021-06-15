import Slider from "react-slick";
import { getSmallImageUrl } from "@/utils/image_path";



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
        top: "22vh",
        height: "28px",
        width: "28px",
        backgroundColor: "rgba(255, 255, 255, .55)",
        left: "18px",
        paddingLeft: "10px",
        paddingTop: "2px",
    }}
        onClick={onClick}
    >
        <i className={"icon icon-small-chevron-right "}  ></i>
    </div>
)

const NextArrow = ({ className, style, onClick }) => (
    <div className="" style={{
        ...style,
        top: "20vh",
        justifyContent: "center",
        position: "absolute",
        borderRadius: "28px",
        cursor: "pointer",
        height: "28px",
        width: "28px",
        backgroundColor: "rgba(255, 255, 255, .55)",
        right: "20px",
        paddingLeft: "10px",
        paddingTop: "2px",
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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

}

const FavoriteImageSlider = ({ favoriteImages, setting = {} }) => {
    const properties = { ...settings, ...setting }
    return (
        <Slider {...properties}>
            {favoriteImages.map(spaceImage => {
                return (
                    <div key={spaceImage.id} className="spaceinner-carousel1">
                        <img src={getSmallImageUrl(spaceImage.property_image_path)}
                            className="img-fluid rounded"
                            alt={spaceImage.property_image_name} />
                    </div>
                )
            })}
        </Slider>
    );
}

export default FavoriteImageSlider;