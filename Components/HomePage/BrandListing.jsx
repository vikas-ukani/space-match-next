import Image from "next/image"
import { useEffect, useState } from "react"
import { getData } from "../../lib/callAPI/call"

const BrandListing = () => {
    const [brands, setBrands] = useState([])
    useEffect(async () => {
        let response = await getData('/getHomePageImages')
        let data = response.data
        setBrands(data)

    }, [])
    return (
        <div className="section-brand">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h4 className="title-sm text-center">Trusted by</h4>
                        </div>
                    </div>

                    <div className="col-lg-12 d-flex">
                        {brands.slice(0, 4).map(brand => {
                            return (
                                <div key={brand.id} className=" brand-items col-md-3 col-lg-3 col-3"
                                    style={{ width: '100%', height: '100%', position: 'relative' }}>
                                    <Image layout='fill'
                                        objectFit='contain'
                                        src={brand.image_path} className="img-fluid  image-rounded" alt={"brand.name"} />
                                </div>
                            )
                        })}
                        <div className="brand-carousel slick-hide-carousel">
                            {brands.map(brand => {
                                return (
                                    <div key={brand.id} className="brand-items"
                                        style={{ width: '100%', height: '100%', position: 'relative' }}>
                                        <Image
                                            layout='fill'
                                            objectFit='contain'
                                            src={brand.image_path} className="img-fluid" alt={"brand.name"} />
                                        {/* <img height="100%" width="100%" src={brand.image_path} className="img-fluid" alt="brand" /> */}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandListing;