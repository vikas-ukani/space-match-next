import DeclinedSpacesSlider from "@/Components/Common/Sliders/Tenant/DeclinedSpaces/DeclinedSpacesSlider";
import FavoriteImageSlider from "@/Components/Common/Sliders/Tenant/Favorite/FavoriteImageSlider";
import Link from "next/link";
import { Modal } from "react-bootstrap";

const DeclinedSpacesModal = ({ show, setShow, data }) => {
    console.log("Modal Data", data);

    return (
        <Modal
            show={show}
            size={'xl'} backdrop="static"
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <p className="text-dark-grey" >
                    {data?.created_date}
                </p>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="mb-5 col-lg-12 space-item ">
                        <div className=" d-flex">
                            {/* <DeclinedSpacesSlider images={data?.property?.spacePropertyImages} /> */}
                            {/* <FavoriteImageSlider setting={{ dots: true }} favoriteImages={data?.property?.spacePropertyImages} /> */}
                            {/* <SpaceImageSlider spaceDetail={list} /> */}
                        </div>
                        {/* <pre>{JSON.stringify(data?.property.spacePropertyImages, null, 1)}</pre> */}
                    </div>
                    {/* <div className="col-lg-12">
                    <div className="space-item mb-4">
                        <DeclinedSpacesSlider images={data.property.spacePropertyImages} />
                    </div>
                    </div> */}
                    <div className="col-lg-12">
                        <div className="list-space-card list-rental-card d-lg-flex align-items-lg-center">
                            <div className="form-group">
                                <div className="space-item">
                                    <Link href={`/space/${data?.property?.slug}`}>
                                        <a className="space-title text-truncate mt-0" target="_blank" id="enquiry_property_name">
                                            {data?.property?.name}
                                        </a>
                                    </Link>

                                    <div>
                                        <p className="space-address text-truncate" id="enquiry_address">
                                            {data?.property?.full_address?.postal_code}
                                        </p>
                                        <p className="space-size" id="enquiry_property_size">
                                            {data?.property?.property_size + ' ' + data?.property?.property_size_type}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="space-price">R <span id="enquiry_price"></span> <span className="space-size">for <span id="enquiry_days"></span> days</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="list-space-date d-flex justify-content-end flex-lg-row flex-column">
                                    <p className="btn font-weight-medium bg-light-grey mb-2 cursor-unset">
                                        <span className="text-dark-grey text-capitalize">
                                            Start: </span>
                                        <span>
                                            {data?.start_date}
                                        </span>
                                    </p>
                                    <p className="btn font-weight-medium bg-light-grey mb-2 ml-lg-3 ml-0 mt-0 cursor-unset">
                                        <span className="text-dark-grey text-capitalize">
                                            End: </span>
                                        <span id="enquiry_end_date">
                                            {data?.end_date}
                                        </span>
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
                                    <p id="entity_individually">Booking is done individually.Not booked on behalf of entity.</p>
                                    <ul className="text-grey" id="entity_behalf">
                                        <li><span>Entity Name:</span> <span id="entity_name">
                                            {data?.entityname}
                                        </span></li>
                                        <li><span>Vat Number:</span> <span id="entity_vat">
                                            {data?.vatnumber}
                                        </span></li>

                                        {data?.dontwebsite == 0 &&
                                            <li id="website_detail"><span>Website:</span>
                                                <span id="website_url">
                                                    {data?.website}
                                                </span>
                                            </li>
                                        }
                                    </ul>
                                </div>

                                <div className="detail-information mb-4">
                                    <p className="detail-perday mb-3">What will you use this space for?</p>
                                    <div className="detail-share mb-0 detail-share-space" id="space_used_for">
                                        {data?.spaceUsedFor?.map(({ title, space_used_for_image_class }, idx) => (
                                            <a href="" key={idx} className="text-grey text-center">
                                                <span>
                                                    <i class={`icon ${space_used_for_image_class} d-block mb-3`}></i>
                                                </span>
                                                {title}
                                            </a>
                                        ))}
                                        )
                                    </div>
                                </div>

                                <div className="detail-information mb-4">
                                    <p className="detail-perday mb-3">More about your Space</p>

                                    <ul className="text-grey">
                                        <li className="d-md-flex"><p className="mr-md-4">Name of your project/application:</p> <p className="
											font-weight-normal" id="project_name"></p></li>
                                    </ul>

                                    <p className="text-grey mt-3" id="project_desc"></p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="detail-information mb-4">
                                    <p className="detail-perday mb-3">What will the space look like?</p>

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
            </Modal.Body>
        </Modal>

    );
}

export default DeclinedSpacesModal;