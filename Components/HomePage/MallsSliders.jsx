import { useEffect, useState } from "react";
import { getData } from "../../lib/callAPI/call";
import Image from 'next/image'
import ShoppingCenterShowCaseSlider from "../Common/Sliders/Home/HomePageSpaceMultipleSlides/ShoppingCenterShowCaseSlider";
const MallsSliders = () => {
    const [malls, setMalls] = useState([])

    useEffect(async () => {
        let response = await getData('/home-space-malls')
        setMalls(response.data)
    }, [])
    return (
        <div className="section-city pt-0">
            <div className="container container-1420">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h1 className="title-sm text-center">Shopping Centre Showcase</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="space-mall-carousel1 ">
                            <ShoppingCenterShowCaseSlider malls={malls} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="">
                            <a href="{{url( '/all-malls')}}" className="text-see-more">explore all shopping centers <span>→</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MallsSliders;