const arrow__css = {
    top: "-70px",
    height: "28px",
    width: "28px",
    backgroundColor: "rgba(0,0,0,.1)",
}
const left = {
    left: "20px",
}
const right = {
    right: "20px",
}
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
    <div className="" style={{ ...style, ...inner_arrow__css, ...left }}
        onClick={onClick}
    >
        {/* slick-arrow-parent right  */}
        <i className={"icon icon-small-chevron-right "}  ></i>
        {/*  */}
    </div>
)

const NextArrow = ({ className, style, onClick }) => (
    <div className="" style={{ ...style, ...inner_arrow__css, ...right }}
        onClick={onClick}
    >
        {/* slick-arrow-parent left */}
        <i className={"icon icon-small-chevron-left "}></i>
        {/* icon icon-small-chevron-left */}
    </div >
)

export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
};


