import { getData } from "@/lib/callAPI/call"
import { useEffect, useState } from "react"
import { findWhere } from "underscore"

const BannerImages = () => {
    const backgroundImage = 'https://dkrr9o6ir0yt2.cloudfront2.net/home/1621402197.jpg'
    const [bgImage, setBgImage] = useState()

    useEffect(async () => {
        let { data } = await getData('/getHomePageImages')
        const homeImage = findWhere(data, { image_type: 1 })
        console.log('homeImage', homeImage)
        setBgImage(homeImage.image_path)
    }, [])
    return (
        // 
        <div >
            <div className="section-find overlay" style={{ backgroundImage: "url( " + (bgImage || backgroundImage) + ")" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="section-title">
                                <h4 className="title-xl text-white">Match our Space to your idea</h4>
                            </div>
                            <p className="text-white mt-2 fs-29">The easiest way to find and rent retail, pop-up and event Space</p>

                            <form className="find-form">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input id="address" type="text" className="form-control form-control-square" placeholder="Where can we find space for you?" />
                                        <div className="input-group-append">
                                            <div className="form-group d-none">
                                                <input type="hidden" name="address_street_number" id="street_number" />
                                                <input type="hidden" name="address_route" id="route" />
                                                <input type="hidden" name="address_city" id="locality" />
                                                <input type="hidden" name="address_state" id="administrative_area_level_1" />
                                                <input type="hidden" name="address_country" id="country" />
                                                <input type="hidden" name="address_lat" id="address_lat" />
                                                <input type="hidden" name="address_lon" id="address_lon" />
                                                <input type="hidden" name="address_postal_code" id="postal_code" />
                                                <input type="hidden" name="address_url" id="address_url" />
                                            </div>
                                            <a className="btn btn-primary d-flex align-items-center justify-content-center" onClick={() => { }}>
                                                <i className="icon icon-search"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerImages;