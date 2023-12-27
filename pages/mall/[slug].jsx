import ShoppingCenterShowCaseSlider from "@/Components/Common/Sliders/Home/HomePageSpaceMultipleSlides/ShoppingCenterShowCaseSlider";
import Link from "next/link";
import Slider from "react-slick";
import { getData } from "../../lib/callAPI/call";

const MallSlug = ({ mall, spaceMall }) => {

    return (
        <div>
            <div className="banner-city d-flex align-items-lg-end align-items-center overlay" style={{ backgroundImage: "url(" + mall.banner_image_path + ")" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 align-items-center">
                            <div className="section-title mb-2 text-white">
                                <h1 className="title-xl">{mall.name}</h1>
                                <h4 className="title-xs">{mall.description}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-mall-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"
                            dangerouslySetInnerHTML={{
                                __html: mall.content
                            }}>

                        </div>
                        <div className="col-lg-6">
                            <div className="mall-detail-image mt-lg-0 mt-4">
                                <img src={mall.image_path} className="img-fluid d-block" alt={mall.name} />
                                {/* <img src="{{ $imgPath }}" className="img-fluid d-block" alt="{{ $mall_detail->name }}"> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section-filter d-lg-flex city-landing">
                <div className="filter-left w-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb-lg-5 mb-3">
                                    <h2 className="title-sm">Available spaces in {mall.name}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid px-0">
                        <div className="filter-wrap">
                            <div className="d-lg-none d-block">
                                <div className="close-panel d-flex justify-content-between align-items-center">
                                    <a className="close-filter" href="">
                                        <i className="icon icon-close-black"></i>
                                    </a>

                                    <label className="align-middle"><i className="icon icon-filter mr-1 pt-1"></i> Filter</label>

                                    <a href="">Clear</a>
                                </div>
                            </div>

                            <form>
                                <div className="row">
                                    <div className="col-xl-2 col-lg-4">
                                        <div className="form-group">
                                            <input id="unavailableStartDate" type="text" className="form-control datepicker" placeholder="From" />
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-4">
                                        <div className="form-group">
                                            <input id="unavailableEndDate" type="text" className="form-control datepicker" placeholder="To" />
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-4">
                                        <div className="form-group">
                                            <div id="property-list"></div>
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-4">
                                        <div className="form-group mb-lg-0 mb-5">
                                            <label className="mb-1">Price Range per day</label>
                                            <div id="rates-range-slider"></div>
                                            <div className="d-flex justify-content-between sm-tooltip">
                                                <p id="startingpriceperday"></p>
                                                <p id="endingpriceperday"></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-4">
                                        <div className="form-group mb-lg-0 mb-5">
                                            <label className="mb-1 mt-3 mt-lg-0">Space Size</label>
                                            <div id="size-range-slider"></div>
                                            <div className="d-flex justify-content-between sm-tooltip">
                                                <p id="startingspacesize"></p>
                                                <p id="endingspacesize"></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-4 align-self-center">
                                        <div className="form-group">
                                            <span className="btn-filter btn-block px-lg-4" type="button" data-toggle="collapse"
                                                data-target="#features-amenities" aria-expanded="false" aria-controls="features-amenities">
                                                More Filters
                                                <i className="icon icon-chevron-down-black"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="filter-collapse">
                                            <div className="collapse" id="features-amenities">
                                                <label className="mb-2">Amenities</label>
                                                <div id="features-list"></div>
                                                <div className="text-right mb-lg-2 mb-4">
                                                    <button className="btn btn-xs btn-outline-dark" type="button">Clear Filters</button>
                                                    <button className="btn btn-xs btn-primary ml-2" type="button" data-toggle="collapse"
                                                        data-target="#features-amenities" aria-expanded="false" aria-controls="features-amenities">
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row d-lg-none d-block">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <a className="btn btn-primary btn-block" id="setUpdate" href=" " type="submit">Update Filters</a>
                                        </div>

                                        <div className="form-group text-center">
                                            <a className="close-filter" href="">Cancel</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="container">
                        <div className="filter-breadcrum">
                            <div className="row no-gutters align-items-center">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                                    <div className="dropdown" id="sort-by">
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6 col-12 mt-lg-0 mt-2" id="tot_records"></div>

                                <div className="col-xl-3 col-lg-4 d-lg-block d-none">
                                    <div className="dropdown text-right" id="configure"></div>
                                </div>

                                <div className="col-xl-2 col-lg-12 text-right d-lg-block d-none" id="pagination">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="filter-spacelist">
                            <div className="" id="filter-space-list">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-item" >
                    <div className="spaceinner-carousel">
                        <div className="space-image-item">
                            <Link href={'/space' + mall.slug} >
                                    <img src={mall.property_image_path} className="img-fluid" alt={mall.name} />
                            </Link>
                        </div>
                    </div>
                    <div className="space-favorite" id="my-fav-space-{{ id }}">
                        <a className="space-like" >
                            <i className="icon icon-heart" title="Add as Favourite"></i>
                        </a>
                    </div>
                    <a className="space-title text-truncate" href="<?php echo url( '/space'); ?>/{{ slug }}">{mall.name}</a>
                    <div className="d-flex justify-content-between">
                        <p className="space-address text-truncate lead">{mall.full_address}</p>
                        <p className="space-size">{mall.property_size} m²</p>
                    </div>
                    <div>
                        <p className="space-price">R{mall.algolia_daily_price} <span className="space-size">per day</span></p>
                    </div>
                </div>
                <div className="form-group d-none">
                    <input type="hidden" name="address_street_number" id="street_number" value="{{ $mall_detail->address_street_number }}" />
                    <input type="hidden" name="address_route" id="route" value="{{ $mall_detail->address_route }}" />
                    <input type="hidden" name="address_city" id="locality" value="{{ $mall_detail->address_city }}" />
                    <input type="hidden" name="address_state" id="administrative_area_level_1" value="{{ $mall_detail->address_state }}" />
                    <input type="hidden" name="address_country" id="country" value="{{ $mall_detail->address_country }}" />
                    <input type="hidden" name="address_lat" id="address_lat" value="{{ $mall_detail->address_lat }}" />
                    <input type="hidden" name="address_lon" id="address_lon" value="{{ $mall_detail->address_lon }}" />
                    <input type="hidden" name="address_postal_code" id="postal_code" value="{{ $mall_detail->address_postal_code }}" />
                    <input type="hidden" name="address_url" id="address_url" value="{{ $mall_detail->address_url }}" />
                    <input type="hidden" name="around_radius" id="around_radius" value="<?php echo env('SEARCH_RADIUS_MALL'); ?>" />
                </div>

            </div>

            <div className="section-city">

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
                                <ShoppingCenterShowCaseSlider malls={spaceMall} />
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
            </div>
        </div >
    );
}

export default MallSlug;

export const getStaticPaths = async () => {
    const response = await getData('/space-malls');
    const malls = response.data;

    // 
    const responseOther = await getData('/space-malls?featured=1');
    const otherMalls = responseOther.data;

    let allMalls = [...malls, ...otherMalls]

    const paths = [...allMalls.map(mall => {
        return {
            params: { slug: mall.slug }
        }
    })]
    return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
    const response = await getData('/space-malls/' + params.slug)
    const mall = response.data

    const responseMall = await getData('/space-malls?rec=6');
    const spaceMall = responseMall.data

    return {
        props: {
            mall: mall ? mall : null,
            spaceMall: spaceMall ? spaceMall : spaceMall
        }
    }
}