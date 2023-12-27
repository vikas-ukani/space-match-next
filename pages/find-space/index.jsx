const FinsSpace = () => {

        const addressData = {
            address: "",
            address_lat: "",
            address_lon: "",
            ...(!true && {location: "Not Found"})
        }

    return (
        <div className="section-filter d-lg-flex">
            <div className="filter-left">
                <div className="filter-wrap">
                    <div className="d-lg-none d-block">
                        <div className="close-panel d-flex justify-content-between align-items-center">
                            <a className="close-filter" href="">
                                <i className="icon icon-close-black"></i>
                            </a>
                            <label className="align-middle">
                                <i className="icon icon-filter mr-1 pt-1"></i> Filter
                            </label>
                            <a >Clear</a>
                        </div>
                    </div>

                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Where can we find space for you?" id="address" name="address" defaultValue={addressData.address} />
                                    <div id="clearSearch" className="ais-SearchBox-reset" type="reset" title="Clear the search query." onClick={() => clearAddress()}
                                        style={{ marginTop: "-15px" }}>X</div>
                                </div>

                                <div className="form-group d-none">
                                    <input type="hidden" name="address_street_number" id="street_number" />
                                    <input type="hidden" name="address_route" id="route" />
                                    <input type="hidden" name="address_city" id="locality" />
                                    <input type="hidden" name="address_state" id="administrative_area_level_1" />
                                    <input type="hidden" name="address_country" id="country" />
                                    <input type="hidden" name="address_lat" id="address_lat" value={addressData.address_lat} />
                                    <input type="hidden" name="address_lon" id="address_lon" value={addressData.address_lon} />
                                    <input type="hidden" name="address_postal_code" id="postal_code" />
                                    <input type="hidden" name="address_url" id="address_url" />
                                    <input type="hidden" name="around_radius" id="around_radius" value="<?php echo env('SEARCH_RADIUS'); ?>" />
                                </div>
                            </div>

                            <div className="col-lg-6">

                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input id="unavailableStartDate" type="text" className="form-control datepicker" placeholder="From" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input id="unavailableEndDate" type="text" className="form-control datepicker" placeholder="To" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3">
                                <div className="form-group">
                                    <label className="mb-1">Price Range per day</label>
                                    <div id="rates-range-slider"></div>
                                    <div className="d-flex justify-content-between sm-tooltip">
                                        <p id="startingpriceperday"></p>
                                        <p id="endingpriceperday"></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="form-group mb-lg-0 mb-5">
                                    <label className="mb-1 mt-3 mt-lg-0">Space Size</label>
                                    <div id="size-range-slider"></div>
                                    <div className="d-flex justify-content-between sm-tooltip">
                                        <p id="startingspacesize"></p>
                                        <p id="endingspacesize"></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <div id="property-list"></div>

                                        </div>
                                    </div>

                                    <div className="col-lg-6 align-self-center">
                                        <div className="form-group">
                                            <span className="btn-filter btn-block px-lg-4" type="button" data-toggle="collapse" data-target="#features-amenities" aria-expanded="false" aria-controls="features-amenities">More Filters <i className="icon icon-chevron-down-black"></i></span>
                                        </div>
                                    </div>
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
                                            <button className="btn btn-xs btn-outline-dark" type="button" id="clear_filters">Clear Filters</button>
                                            <button className="btn btn-xs btn-primary ml-2" type="button" data-toggle="collapse" data-target="#features-amenities" aria-expanded="false" aria-controls="features-amenities">Apply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row d-lg-none d-block">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <a className="btn btn-primary btn-block" id="setUpdate" href="" type="submit">Update Filters</a>
                                </div>

                                <div className="form-group text-center">
                                    <a className="close-filter" href="">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div >
                <div id="loader" className="loader test">
                    <div className="loader-list">
                        <div className="spinner">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                        </div>
                    </div>
                </div>
                <div className="empty-space"></div>
                <div className="filter-breadcrum" id="space-top-list">
                    <div className="row no-gutters align-items-center">
                        <div className="col-xl-4 col-lg-4 col-sm-5 col-6">
                            <div className="dropdown" id="sort-by">
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-5 col-6" id="tot_records"></div>

                        <div className="col-xl-3 col-lg-4 d-lg-block d-none">
                            <div className="dropdown text-right" id="configure"></div>
                        </div>
                        <div className="col-xl-2 col-lg-12 text-right d-lg-block d-none" id="pagination"></div>
                    </div>
                </div>
                <div className="filter-spacelist" id="space-list">
                    <div className="" id="filter-space-list">
                    </div>
                </div>

            </div >

            <script type="text/html" id="hit-template">
                {/* @verbatim */}
                <div className="space-item" data-id="{{ id }}">
                    <div className="spaceinner-carousel" id="slider_{{ id }}">
                        {/* {{ #space_property_images}} */}
                        {/* {{ #property_image_path}} */}
                        <div className="space-image-item">
                            <a href="<?php echo url( '/space'); ?>/{{ slug }}">
                                <img src="{{property_image_path}}" className="img-fluid" alt="{{name}}" />
                            </a>
                        </div>
                        {/* {{/ property_image_path}} */}
                        {/* {{/ space_property_images}} */}
                    </div>
                    <div className="space-favorite" id="my-fav-space-{{ id }}">
                        <a className="space-like" onClick={() => addToFavorite(1, this)}>
                            <i className="icon icon-heart" title="Add as Favourite"></i>
                        </a>
                    </div>
                    <a className="space-title text-truncate" href="<?php echo url( '/space'); ?>/{{ slug }}">
                        Name{/* {{ name }} */}
                    </a>
                    <div className="d-flex justify-content-between">
                        <p className="space-address text-truncate lead">
                            full_address{/* {{ full_address }} */}
                        </p>
                        <p className="space-size">
                            property_size{/* {{ property_size }} */}
                            m²
                        </p>
                    </div>
                    <div>
                        <p className="space-price">
                            R algolia_daily_price
                            {/* {{ algolia_daily_price }} */}
                            <span className="space-size">per day</span></p>
                    </div>
                </div>
                {/* @endverbatim */}
            </script>

            <div className="filter-right">
                <div id="findlocation" className="find-map">
                    <div id="geo-search"></div>
                </div>
            </div >
        </div >
    );
}

export default FinsSpace;