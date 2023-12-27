import Link from "next/link";
import BlogCardCarousel from "../../Components/Common/Sliders/BlogCardCarousel";
import CitiesCardSilkSlider from "../../Components/Common/Sliders/CitiesCardSilkSlider";
import { getData } from "../../lib/callAPI/call";
import { getMediumImageUrl, getSmallImageUrl } from "../../utils/image_path";

const CitySlug = ({ city_detail, cities }) => {

    return (
        <div>
            <div className="banner-city d-flex align-items-lg-end align-items-center overlay" style={{ backgroundImage: "url(" + city_detail.banner_image_path + ")" }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 align-items-center">
                            <div className="section-title mb-2 text-white">
                                <h1 className="title-xl">{city_detail.name}</h1>
                                <h4 className="title-xs">{city_detail.description}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-mall-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: city_detail.content
                                }}>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="mall-detail-image mt-lg-0 mt-4">
                                <img src={getMediumImageUrl(city_detail.image_path)} className="" alt={city_detail.name} />
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
                                    <h1 className="title-sm">Available spaces in {city_detail.name}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid px-0">
                        <div className="filter-wrap">
                            <div className="d-lg-none d-block">
                                <div className="close-panel d-flex justify-content-between align-items-center">
                                    <a className="close-filter" ><i className="icon icon-close-black"></i></a>
                                    <label className="align-middle"><i className="icon icon-filter mr-1 pt-1"></i> Filter</label>
                                    <a >Clear</a>
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
                                            <span className="btn-filter btn-block px-lg-4" type="button" data-toggle="collapse" data-target="#features-amenities" aria-expanded="false" aria-controls="features-amenities">More Filters <i className="icon icon-chevron-down-black"></i></span>
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
                                                    <button className="btn btn-xs btn-primary ml-2" type="button" data-toggle="collapse" data-target="#features-amenities" aria-expanded="false" aria-controls="features-amenities">Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row d-lg-none d-block">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <a className="btn btn-primary btn-block" id="setUpdate" type="submit">Update Filters</a>
                                        </div>

                                        <div className="form-group text-center">
                                            <a className="close-filter" >Cancel</a>
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
            </div >

            <div className="section-city">
                <div className="container container-1420">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h3 className="title-sm text-center">Search by suburbs and cities</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row" id="filter-cities-list">
                        <div className="col-lg-12 pl-0 pr-0 ">
                            <CitiesCardSilkSlider cities={cities} setting={{ slidesToShow: 3 }} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="">
                                <Link href="/all-cities" className="text-see-more" >
                                    explore spaces in all suburbs and cities <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {city_detail.blogs && (
                <div className="section-blogs section-related-blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title mb-5">
                                    <h4 className="title-sm text-center">Blog articles</h4>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <BlogCardCarousel blogs={city_detail.blogs} setting={{ slidesToShow: 2 }} />
                            </div>

                            {/* <div className="col-lg-12">
                                <div className="related-carousel1 slick-hide-carousel1">
                                    {city_detail.blogs.map(blog => {
                                        return (
                                            <div key={blog.id} className="items-single">
                                                <div className="card-blog">
                                                    <div className="row no-gutters">
                                                        <div className="col-lg-6 overflow-hidden">
                                                            <div className="card-blog-image overlay" style={{ backgroundImage: "url(" + blog.blog_image_path + ")" }} ></div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="card-blog-content">
                                                                <div className="section-title">
                                                                    <h4 className="title-xs">
                                                                        <Link href={'/blog/' + blog.slug} >
                                                                            <a className="text-dark"  >{blog.title}</a>
                                                                        </Link>
                                                                    </h4>
                                                                </div>

                                                                <p className="text-grey mt-4">{blog.brief}</p>
                                                                <Link href={'/blog/' + blog.slug} >
                                                                    <a className="text-grey text-uppercase mt-auto" >Read More</a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div> */}
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="">
                                    <Link href="/blogs" className="text-see-more">
                                        see more articles <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export const getStaticPaths = async () => {

    const response = await getData('/space-cities?featured=1')
    const cities = response.data

    const paths = [...cities.map(city => {
        return { params: { slug: city.slug } }
    })]

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {

    const response = await getData('/space-cities/' + params.slug)
    const city_detail = response.data

    const responseCities = await getData('/space-cities?rec=6')
    const cities = responseCities.data

    return {
        props: {
            city_detail,
            cities
        }
    }
}

export default CitySlug;