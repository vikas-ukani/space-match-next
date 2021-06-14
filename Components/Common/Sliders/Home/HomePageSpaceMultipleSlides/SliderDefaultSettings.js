
const PrevArrow = ({ className, style, onClick }) => (
    <span className="" style={{ ...style }}
        onClick={onClick}
    >
        {/* slick-arrow-parent right  */}
        {/* <i className={"slick-arrow-parent right "}  ></i> */}
        {/*  */}
    </span>
)

const NextArrow = ({ className, style, onClick }) => (
    <span className="" style={{ ...style }}
        onClick={onClick}
    >
        {/* slick-arrow-parent left */}
        {/* <i className={"icon icon-small-chevron-left "}></i> */}
        {/* icon icon-small-chevron-left */}
    </span >
)


export const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    appendDots: dots => (
        <span
            style={{
                bottom: "20px"
            }}
        >
            <ul style={{ margin: "0px" }}> {dots} </ul>
        </span>
    ),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    slidesToShow: 3,
    slidesToScroll: 3,
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


