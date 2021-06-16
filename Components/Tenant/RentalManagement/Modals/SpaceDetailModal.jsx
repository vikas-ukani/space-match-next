const SpaceDetailModal = () => {
    return (
        <div>
            <div className="modal" id="modalEnquirydetail">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <i className="icon icon-close-black" data-toggle="modal" data-target="#modalEnquirydetail"></i>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className=" mb-3">Enquiry date: <span className="text-dark-grey" id="enquiry_created_date"></span></p>
                                </div>

                                <div className="col-lg-12">
                                    <div className="space-item mb-4">
                                        <div className="spaceinnerRental-carousel" id="property_images">
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="detail-information mb-4">
                                        <p className="detail-perday mb-3">Space Owner's details</p>

                                        <div className="text-grey">
                                            <span className="mb-2 d-block"><strong className="text-dark">Name: </strong><span id="landlord_name"></span></span>
                                            <span className="mb-2 d-block"><strong className="text-dark">Mobile number: </strong><span id="landlord_mobile"></span></span>
                                            <span className="mb-2 d-block"><strong className="text-dark">Email: </strong><span id="landlord_email"></span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="list-space-card list-rental-card d-lg-flex align-items-lg-center">

                                        <div className="form-group">
                                            <div className="space-item">
                                                <span className="space-title "><a className="text-dark text-truncate mt-0" href="javascript:void(0);" target="_blank" id="enquiry_property_name"></a></span>
                                                <div>
                                                    <p className="space-address text-truncate" id="enquiry_address"></p>
                                                    <p className="space-size" id="enquiry_property_size"></p>
                                                </div>

                                                <div>
                                                    <p className="space-price">R <span id="enquiry_price"></span> <span className="space-size">for <span id="enquiry_days"></span> days</span></p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="list-space-date d-flex justify-content-end flex-lg-row flex-column">
                                                <p className="btn font-weight-medium bg-light-grey mb-2 cursor-unset px-2">
                                                    <span className="text-dark-grey text-capitalize">Start date:</span> <span id="enquiry_start_date"></span>
                                                </p>
                                                <p className="btn font-weight-medium bg-light-grey mb-2 ml-lg-3 ml-0 mt-0 cursor-unset px-2">
                                                    <span className="text-dark-grey text-capitalize">End date:</span> <span id="enquiry_end_date"></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="detail-information mb-4">
                                                <p className="detail-perday mb-3">Entity Details</p>
                                                <p>Booking on behalf of an entity: <span id="entity_individually"></span></p>
                                                <ul className="text-grey" id="entity_behalf">
                                                    <li><span>Entity Name:</span> <span id="entity_name"></span></li>
                                                    <li><span>Vat Number:</span> <span id="entity_vat"></span></li>
                                                    <li id="website_detail"><span>Website:</span> <span id="website_url">www.ooberlojetco.co.za</span></li>
                                                </ul>
                                            </div>

                                            <div className="detail-information mb-4">
                                                <p className="detail-perday mb-3">The Space will be used for:</p>
                                                <div className="detail-share mb-0 detail-share-space" id="space_used_for">
                                                </div>
                                            </div>

                                            <div className="detail-information mb-4">
                                                <p className="detail-perday mb-3">More information about the brand and project:</p>

                                                <ul className="text-grey">
                                                    <li className="d-md-flex"><p className="mr-md-4">Name of your project/application:</p> <p className="
											font-weight-normal" id="project_name"></p></li>
                                                </ul>

                                                <p className="text-grey mt-3" id="project_desc"></p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="detail-information mb-4">
                                                <p className="detail-perday mb-3">What <span className="detail-tenant-name" id="view_tenant_name"></span> planning to do in the space:</p>

                                                <p className="text-grey mt-3" id="space_look_like"></p>
                                            </div>

                                            <div className="detail-information mb-4">
                                                <ul className="form-row detail-image" id="enquiry_iamges">
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpaceDetailModal;