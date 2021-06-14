import { getData } from "@/lib/callAPI/call";
import { getSmallImageUrl } from "@/utils/image_path";
import { useState, useEffect } from "react";
import SASuburbsAndCitiesSlider from "./SASuburbsAndCitiesSlider";

const SASuburbsAndCities = () => {
    const [cities, setCities] = useState([])

    useEffect(async () => {
        let response = await getData('/space-cities?rec=5')
        setCities(response.data)
    }, [])
    return (
        <div>
            <div className="section-city">
                <div className="container container-1420">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h3 className="title-sm text-center"> Find Space in South Africa's suburbs and cities</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 pt-2">
                            <SASuburbsAndCitiesSlider cities={cities} setting={{ slidesToShow: 4 }} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="">
                                <a href="{{url( '/all-cities')}}" className="text-see-more">explore spaces in all suburbs and cities <span>→</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SASuburbsAndCities;