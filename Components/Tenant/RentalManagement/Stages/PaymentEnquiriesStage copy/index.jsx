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

                            {data?.is_payment_done_by_tenant == 0 && <p>{data.time_left_to_do_payment}hours left</p>}

                        </div>
                        <div className="card-body p-0 pb-2">
                            <p  >
                                <Link href={`/space/${data?.property?.slug}`} target="_blank">
                                    {data?.property?.name}
                                </Link>
                            </p>

                            <p className="small text-grey mt-1">
                                {data?.property?.full_address},{data?.property?.address_postal_code}
                            </p>
                            <div className="d-flex justify-content-around my-2 py-2">
                                <p class="cursor-unset small"><span class="'+text_color+' mr-1">Start:</span> {data.start_date}</p>
                                <p class="cursor-unset small"><span class="'+text_color+' mr-1">End:</span>{data.end_date}</p>
                            </div>
                            <div className="d-flex justify-content-between pb-2">
                                <p class="btn cursor-unset btn-primary-light font-weight-bold">{data?.property_rate_details?.total_days}  Days</p>
                                <span class="btn btn-dark cursor-unset">R {data?.property_rate_details?.tenant_amount_with_vat}</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>
                                    <span class="small font-weight-medium">
                                        Please note: The amount shown above does not reflect a deposit or any other amounts specific to your agreement that have been agreed with
                                        <strong>
                                            {data?.property?.space_owner_contact_person}
                                        </strong>.
                                    </span>
                                </p>
                            </div>

                            <div className="card-foot">
                                {data?.is_payment_done_by_tenant == 0 && (
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p class="font-weight-medium text-dark-grey">Legal Agreement</p>
                                    </div>
                                )}

                                {data?.is_payment_done_by_tenant == 1 && (
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p class="font-weight-medium text-dark-grey">Payment confirmation has been uploaded.</p>
                                    </div>
                                )}
                                {data?.is_payment_done_by_tenant == 1 && (
                                    <>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p class="font-weight-medium text-dark-grey">Payment confirmation has been uploaded.</p>
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <a class="btn btn-secondary view-agreement">View lease agreement</a>
                                        </div>
                                    </>

                                )}
                            </div>





                            <div className="d-flex justify-content-between mt-2">
                                {data.is_payment_done_by_tenant == 1 && (
                                    <>
                                        <a class="btn btn-secondary view-enquiry">View</a>
                                        <span class="btn btn-light"><i class="icon icon-paid-primary mr-2"></i>Paid</span>
                                    </>
                                )}

                                {data.is_payment_done_by_tenant == 0 && (
                                    <>
                                        <a class="btn btn-secondary view-agreement">View Agreement</a>
                                        <a data-payableamount={data.property_rate_details?.tenant_amount_with_vat} class="btn btn-primary payment-enquiry">Upload payment confirmation</a>
                                    </>
                                )}

                            </div>

                            {data.is_payment_done_by_tenant == 0 && (
                                <div className="d-flex justify-content-between align-items-center">
                                    <p>
                                        <span class="small font-weight-medium">
                                            Please note: You will receive an invoice from SpaceMatch by email.Please arrange payment using one of our payment options and upload confirmation using the link above.
                                        </span>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default PaymentEnquiriesStage;