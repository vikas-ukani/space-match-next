const SiteVisitTimeSelectionConfirmation = () => {
    return (
        <div>
            <div className="modal hide" id="modalSiteVisitTimeConfimation">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="icon-box">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                    <circle className="path circle" fill="none" stroke="#28a745" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                                    <polyline className="path check" fill="none" stroke="#28a745" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                                </svg>
                            </div>
                            <p className="text-center text-grey lead font-weight-medium">Are you sure, you are happy with <span id="selected_site_visit_time">selected_date_time</span> ?</p>

                        </div>
                        <input type="hidden" name="enquiryId" id="enquiryId" value="" />
                        <input type="hidden" name="sitevisitId" id="sitevisitId" value="" />
                        <input type="hidden" name="selected_date_time" id="selected_date_time" value="" />
                        <div className="modal-footer border-0 justify-content-center">
                            <button type="button" className="btn btn-primary" id="confrim-sitevisit-time">Confirm the Time</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SiteVisitTimeSelectionConfirmation;