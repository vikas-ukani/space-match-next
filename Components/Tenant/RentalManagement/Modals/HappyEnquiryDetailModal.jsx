const HappyEnquiryDetailModal = () => {
    return (
        <div>
            <div className="modal hide" id="modalHappyConfimation">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="icon-box">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                    <circle className="path circle" fill="none" stroke="#28a745" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                                    <polyline className="path check" fill="none" stroke="#28a745" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                                </svg>
                            </div>
                            {/* {{-- < div className="section-title mb-3">
                            <h4 className="title-md text-center">Are you sure?</h4>
                        </> --}} */}
                        <p className="text-center text-grey lead font-weight-medium">Are you sure you want to book the Space ? </p>

                    </div>
                    <input type="hidden" name="enquiryId" id="enquiryId" value="" />
                    <div className="modal-footer border-0 justify-content-center">
                        <button type="button" className="btn btn-primary" id="happy-space">Yes</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel Enquiry</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default HappyEnquiryDetailModal;