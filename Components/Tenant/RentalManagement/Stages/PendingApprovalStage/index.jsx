import Link from "next/link";
import { useState } from "react";

const PendingApprovalStage = ({ pending_enquiries }) => {
    const [isShowWithdrawEnquiry, setIsShowWithdrawEnquiry] = useState(false)
    const [isShowViewEnquiry, setIsShowViewEnquiry] = useState(false)

    const updateWithdrawEnquiry = (id) => {
        console.log(" id ", id);
        setIsShowWithdrawEnquiry(true)
    }
    const updateViewEnquiry = (id) => {
        console.log(" id ", id);
        setIsShowViewEnquiry(true)
    }

    return (
        <div >
            {!pending_enquiries && <p>No enquiries at this stage</p>}
            {pending_enquiries && pending_enquiries.map((data, idx) => {
                return (
                    <div key={data.id} className="card-column">
                        <div className="card-head d-flex justify-content-between">
                            <p>
                                {data?.created_date}
                            </p>
                            <p>Ref. No:{data?.property?.reference_number}</p>
                        </div>
                        <div className="card-body p-0 pb-2">
                            <p  >
                                <Link href={`/space/${data?.property?.slug}`}>
                                    <a target="_blank">{data?.property?.name}</a>
                                </Link>
                            </p>

                            <p className="small text-grey mt-1">
                                {data?.property?.full_address},{data?.property?.address_postal_code}
                            </p>

                            <div className="d-flex justify-content-around my-2 py-2">
                                <p className="small">
                                    <span className="text-grey mr-1">Start:</span>
                                    {data?.start_date}
                                </p>
                                <p className="small">
                                    <span className="text-grey mr-1">End:</span>
                                    {data?.end_date}
                                </p>
                            </div>

                            <div className="d-flex justify-content-between border-bottom pb-3">
                                <p className="btn cursor-unset">
                                    {data?.property_rate_details?.total_days} Days
                                </p>
                                <span className="btn btn-dark cursor-unset">
                                    R {data?.property_rate_details?.tenant_amount_with_vat}
                                </span>
                            </div>

                            <div className="d-flex py-2 mt-1">
                                <p className="font-weight-medium text-dark-grey">Site visit?</p>
                                <p className="font-weight-bold ml-2">
                                    {data?.site_visit == 1 ? 'Yes' : 'No'}
                                </p>
                            </div>
                            <div className="card-foot">
                                {data?.tenant_detail?.is_fica_details_uploaded == 0 && (
                                    <p className="small font-italic text-warning">
                                        You have not uploaded FICA Detail's. Please click
                                        <a href="http://space-match-front.local/tenant-fica-details"
                                            target="_blank"
                                            className="font-weight-bold text-danger"> HERE
                                        </a> to upload it.
                                    </p>
                                )}
                                {(data?.tenant_detail?.is_fica_details_uploaded == 1 && data?.tenant_detail?.is_verify_fica_category_by_admin == 0) && (
                                    <p className="small font-italic text-warning">
                                        Your FICA Detail\'s are not approved. Please click
                                        <a href="http://space-match-front.local/tenant-fica-details"
                                            target="_blank" className="font-weight-bold text-danger">HERE
                                        </a> to check it.
                                    </p>
                                )}
                                <div className="d-flex justify-content-between mt-2">
                                    {(data?.tenant_detail?.is_verify_fica_category_by_admin == 1) && (
                                        <>
                                            <a className="btn btn-secondary withdraw-enquiry text-white" onClick={() => updateWithdrawEnquiry(data?.id)}>Withdraw</a>
                                        </>
                                    )}
                                    <a className="btn btn-primary view-enquiry text-white" onClick={() => updateViewEnquiry(data?.id)}>View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default PendingApprovalStage;