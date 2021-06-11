import { useEffect, useState } from "react"
import { getData } from "../../lib/callAPI/call"
import { settings } from '@/Components/Common/Sliders/SliderDefaultSettings'
import Slider from "react-slick"

const DelightSection = () => {
    const properties = { ...settings, dots: false, slidesToShow: 1, arrows: true, adaptiveHeight: false }
    const [slideImages, setSlideImages] = useState([])

    useEffect(async () => {
        let response = await getData('/getHomePageImages')
        let data = response.data
        data = data.filter(item => {
            return item.image_type == 2
        })
        setSlideImages(data)
    }, [])

    return (
        <div className="section-deadlight">
            <div className="container-fluid no-gutter">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="deadlight-carousel h-100">
                            <Slider  {...properties}>
                                {slideImages.map(image => {
                                    return (
                                        <div key={image.id} className="space-image-item " >
                                            <img height="100%" width="100%" src={image.image_path}
                                                className="img-fluid " alt="Space" style={{ minHeight: '100%' }} />
                                            {/* <img height="100%" width="100%" style={{ backgroundImage: "url(" + image.image_path + ")" }}
                                            className="img-fluid" alt="Space" /> */}
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-dark h-100">
                            <div className="right-deadlight text-center">
                                <p className="text-uppercase font-weight-bold">#StartSomething</p>
                                <div className="section-title mt-3 mb-4">
                                    <h4 className="title-md">SpaceMatch helps you to bring your ideas to life.</h4>
                                </div>
                                <p className="description mb-3">Our goal is to connect brands, online stores and artists with space owners for short- term rentals, pop-up stores and events in South Africa.</p>
                                <p className="description mb-3">Renting a space on SpaceMatch is so easy.</p>
                                <p className="description">With hundreds of listings to choose from, you can browse spaces and send as many enquiries as you’d like for free. Our platform offers full flexibility to meet your needs and get you started.</p>

                                <p className="mt-4"><a className="text-white font-weight-bold" href="{{url('/popup-trend')}}">The Pop-Up Trend</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default DelightSection;