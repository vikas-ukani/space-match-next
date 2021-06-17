import Link from "next/link";

const SiteVisitEnquiriesStage = ({ site_visit_enquiries}) => {
    return (
        <div>
            {!site_visit_enquiries && <p>No enquiries at this stage</p>}
            {site_visit_enquiries && site_visit_enquiries.map((pending_enquiry, idx) => {
                return (
                    <div className="card-column">
                        <div className="card-head d-flex justify-content-between">
                            <p>
                                {pending_enquiry?.created_date}
                            </p>
                            <p>Ref. No:{pending_enquiry?.property?.reference_number}</p>
                        </div>
                        <div className="card-body p-0 pb-2">
                            <p  >
                                <Link href={`/space/${pending_enquiry?.property?.slug}`}>
                                    <a target="_blank">{pending_enquiry?.property?.name}</a>
                                </Link>
                            </p>

                            <p className="small text-grey mt-1">
                                {pending_enquiry?.property?.full_address},{pending_enquiry?.property?.address_postal_code}
                            </p>

                            <div className="d-flex justify-content-around my-2 py-2">
                                <p className="small">
                                    <span className="text-grey mr-1">Start:</span>
                                    {pending_enquiry?.start_date}
                                </p>
                                <p className="small">
                                    <span className="text-grey mr-1">End:</span>
                                    {pending_enquiry?.end_date}
                                </p>
                            </div>

                            <div className="d-flex justify-content-between border-bottom pb-3">
                                <p className="btn cursor-unset">
                                    {pending_enquiry?.property_rate_details?.total_days} Days
                                </p>
                                <span className="btn btn-dark cursor-unset">
                                    R {pending_enquiry?.property_rate_details?.tenant_amount_with_vat}
                                </span>
                            </div>

                            <div className="d-flex py-2 mt-1">
                                <p className="font-weight-medium text-dark-grey">Site visit?</p>
                                <p className="font-weight-bold ml-2">
                                    {pending_enquiry?.site_visit == 1 ? 'Yes' : 'No'}
                                </p>

                            </div>
                            <div className="card-foot">

                                {pending_enquiry?.tenant_detail?.is_fica_details_uploaded == 0 && (
                                    <p className="small font-italic text-warning">
                                        You have not uploaded FICA Detail's. Please click
                                        <a href="http://space-match-front.local/tenant-fica-details"
                                            target="_blank"
                                            className="font-weight-bold text-danger"> HERE
                                        </a> to upload it.
                                    </p>
                                )}

                                {(pending_enquiry?.tenant_detail?.is_fica_details_uploaded == 1 && pending_enquiry?.tenant_detail?.is_verify_fica_category_by_admin == 0) && (
                                    <p className="small font-italic text-warning">
                                        Your FICA Detail\'s are not approved. Please click
                                        <a href="http://space-match-front.local/tenant-fica-details"
                                            target="_blank" className="font-weight-bold text-danger">HERE
                                        </a> to check it.
                                    </p>
                                )}

                                <div className="d-flex justify-content-between mt-2">
                                    {(pending_enquiry?.tenant_detail?.is_verify_fica_category_by_admin == 1) && (
                                        <>
                                            <a className="btn btn-secondary withdraw-enquiry" onClick={() => updateWithdrawEnquiry(pending_enquiry?.id)}>Withdraw</a>
                                        </>
                                    )}
                                    <a className="btn btn-primary view-enquiry" onClick={() => updateViewEnquiry(pending_enquiry?.id)}>View</a>

                                </div>

                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default SiteVisitEnquiriesStage;