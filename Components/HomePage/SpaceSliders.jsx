import { getData } from '../../lib/callAPI/call';
import HomePageSpaceMultipleSlides from '../Common/Sliders/Home/HomePageSpaceMultipleSlides';

export const getServerSideProps = async () => {
    let { data } = await getData('/space/cities')
    return {
        props: { data }
    }
}

const SpaceSliders = ({ data }) => {
    if (!data) {
        return <div />
    }
    const spacesKeys = Object.keys(data)
    const spacesValues = Object.values(data)
    return (
        <div className="section-spaceslider ">
            <div className="container">
                {spacesValues.map((space, index) => {
                    return (
                        <div key={index} className="row mb-3">
                            <div className="col-lg-12  mb-3">
                                <div className="section-title">
                                    <h4 className="title-sm text-center">
                                        {/* <Link href="/city/cape-town"> */}
                                        Spaces in <span>{spacesKeys[index]}</span>
                                        {/* </Link> */}
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                {!space.data && (
                                    <div className="title-sm text-center mt-3 mb-4">
                                        No spaces found in {spacesKeys[index]}
                                    </div>
                                )}
                            </div>
                            {/* slick-hide-carousel */}
                            {/* space-carousel space-carousel-home */}
                            <div className="col-lg-12 mb-5">
                                <div className="  ">
                                    <HomePageSpaceMultipleSlides spaceDetails={space.data} />
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="text-center">
                            {/* <Link href="/find-space" className="btn btn-dark text-white"> */}
                            <a >
                                View All Spaces
                            </a>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SpaceSliders;