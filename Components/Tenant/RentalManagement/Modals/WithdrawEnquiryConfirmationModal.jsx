const WithdrawEnquiryConfirmationModal = () => {
    return (
        <div>
            <div className="modal hide" id="modalWithdrawConfimation">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="icon-box">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                    <circle className="path circle" fill="none" stroke="#dc3545" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                                    <line className="path line" fill="none" stroke="#dc3545" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3" />
                                    <line className="path line" fill="none" stroke="#dc3545" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2" />
                                </svg>
                            </div>
                            <div className="section-title mb-3">
                                <h4 className="title-md text-center">Are you sure?</h4>
                            </div>
                            <p className="text-center text-grey lead font-weight-medium">Do you really want to withdraw this enquiry?</p>
                            <input type="hidden" name="enquiryId" id="enquiryId" value="" />
                        </div>

                        <div className="modal-footer border-0 justify-content-center">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger" id="withdraw-enquiry">Withdraw</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WithdrawEnquiryConfirmationModal;