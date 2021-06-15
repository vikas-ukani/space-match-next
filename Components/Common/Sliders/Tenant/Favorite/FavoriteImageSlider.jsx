import Slider from "react-slick";
import { getSmallImageUrl } from "@/utils/image_path";
import { settings } from "../../SliderDefaultSettings";

const FavoriteImageSlider = ({ favoriteImages, setting = {} }) => {
    const properties = { ...setting }
    return (
        <div>
            {favoriteImages && (
                <Slider {...properties}>
                    <div className="spaceinner-carousel row">
                                <div className="space-image-item">
                        {favoriteImages.map((img, idx) => {
                            return (
                                    <img  key={idx} src={getSmallImageUrl(img.property_image_path)}
                                        className="img-fluid" alt={img.property_image_name} />
                            )
                        })}
                        </div>
                    </div>
                </Slider>
            )}

        </div>
    );
}

export default FavoriteImageSlider;