import Link from "next/link";

const PaymentEnquiriesStage = ({ payment_enquiries }) => {
    return (
        <div >
            {!payment_enquiries && <p>No enquiries at this stage</p>}
            {payment_enquiries && payment_enquiries.map((data, idx) => {
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

                            {/* <div className="d-flex justify-content-around my-2 py-2">
                                <p className="small">
                                    <span className="text-grey mr-1">Start:</span>
                                    {data?.start_date}
                                </p>
                                <p className="small">
                                    <span className="text-grey mr-1">End:</span>
                                    {data?.end_date}
                                </p>
                            </div> */}

                            {/* <div className="d-flex justify-content-between border-bottom pb-3">
                                <p className="btn cursor-unset">
                                    {data?.property_rate_details?.total_days} Days
                                </p>
                                <span className="btn btn-dark cursor-unset">
                                    R {data?.property_rate_details?.tenant_amount_with_vat}
                                </span>
                            </div> */}

                            {/* <div className="d-flex py-2 mt-1">
                                <p className="font-weight-medium text-dark-grey">Site visit?</p>
                                <p className="font-weight-bold ml-2">
                                    {data?.site_visit == 1 ? 'Yes' : 'No'}
                                </p>

                            </div> */}
                            <div className="card-foot">

                                {data.has_landlord_set_date == 0 && <p className="small font-italic text-warning">The Owner will contact you to arrange a site visit</p>}

                                {(data.site_visit_status == 1 && data.is_tenant_happy_with_space == 0) && (
                                    <>
                                        <p className="font-weight-medium text-center text-dark-grey mt-2">Confirmed site visit time :</p>
                                        <span className="btn cursor-unset">{data.site_visit_selected_date_time}</span>
                                    </>
                                )}

                                {(data.has_landlord_set_date == 1 && data.site_visit_status == 1) && (
                                    <>
                                        {(data.is_tenant_happy_with_space == 0) && (
                                            <>
                                                <p className="small mt-2">Please select whether to book the Space or not : </p>
                                                <p className="font-weight-medium text-center text-dark-grey mt-2">Book Space ? </p>
                                            </>
                                        )}

                                        {(data?.tenant_detail?.is_fica_details_uploaded) && (
                                            <p className="small font-italic text-warning mt-2">
                                                In order to proceed with your booking, we will need your Fica details. Please click
                                                <a href="' + base_url + '/tenant-fica-details" target="_blank" className="font-weight-bold text-danger">HERE
                                                </a> to upload your FICA details.
                                                <br /> After the site visit and once your Fica details are verified, you can select whether to book the Space or not:
                                            </p>
                                        )}

                                    </>
                                )}

                                {(data?.has_landlord_set_date == 0 || data.site_visit_status == 1) && (
                                    <div className="d-flex justify-content-between">
                                        {data?.has_landlord_set_date == 0 && (
                                            <a className="btn btn-secondary withdraw-enquiry text-white">Withdraw</a>
                                        )}

                                        {(data.is_tenant_happy_with_space == 1)
                                            ? (
                                                <a className="btn btn btn-secondary view-enquiry text-white">View Space</a>
                                            )
                                            : (
                                                <a className="btn btn btn-secondary view-enquiry text-white">View</a>
                                            )
                                        }
                                    </div>
                                )}

                                {(data.is_fica_verify_by_landlord == 2 && data.is_fica_sortout_by_admin == 0) && (
                                    <p className="small font-italic text-success mt-2">Landlord raised FICA issue, SpaceMatch might contact you.</p>
                                )}

                                {(data.has_landlord_set_date == 1 && data.site_visit_status == 1 && data.is_tenant_happy_with_space == 0 && data.tenant_detail.is_fica_details_uploaded == 1)
                                    && (
                                        <p className="small font-italic text-warning mt-2">
                                            Please note: If you select <strong>NO</strong>, your enquiry will be terminated. If you select
                                            <strong>YES</strong>,
                                            the Space Owner will prepare a lease agreement for you..
                                        </p>
                                    )}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default PaymentEnquiriesStage;