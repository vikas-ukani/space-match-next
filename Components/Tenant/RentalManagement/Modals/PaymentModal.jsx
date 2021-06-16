const PaymentModal = () => {
    return (
        <div>
            <div className="modal fade" id="modalPayment" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Payment Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="form-dashboard" method="POST" id="frmPayment" name="frmPayment" enctype="multipart/form-data">
                                <div className="row">

                                    {/* {{-- < div className="col-xl-12">
                                    <div className="form-group">
                                        <label>Select Payment Type*</label>
                                        <select className="select2" id="payment_method" name="payment_method">
                                            <option value="">-Please Select Type-</option>
                                            <option value="2">Cheque</option>
                                            <option value="3">Online</option>
                                        </select>
                                        <em id="payment_method_error" className="error invalid-feedback"></em>
                                    </div>
                                </>   --}} */}

                                    <div className="col-xl-12">
                                        <div className="form-group">
                                            <label>Total Paid Amount</label>
                                            <span className="form-control" id="tenant_paid_amount" style="padding-top: 22px !important;"></span>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="form-group">
                                            <label className="font-weight-medium">Upload Payment Proof</label>
                                            <div className="custom-file mb-3 d-flex align-items-center" id="pay_proof">
                                                <input type="file" className="custom-file-input" id="payment_proof" name="payment_proof" />
                                                <label className="custom-file-label font-weight-bold" for="payment_proof">Upload</label>
                                                <span className="text-dark-grey"></span>
                                                <i className="icon icon-delete"></i>
                                            </div>
                                        </div>
                                        <em id="payment_proof_error" className="error invalid-feedback"></em>
                                    </div>
                                    <input type="hidden" name="payment_method" id="payment_method" value="2" />
                                    <input type="hidden" name="enquiry_id" id="entityId" value="" />
                                    <input type="hidden" name="tenant_total_paid_amount" id="tenant_total_paid_amount" value="" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer border-0 justify-content-center">
                            <button type="button" className="btn btn-primary" id="payment_done_by_tenant">Update</button>
                            <button type="button" className="btn btn-secondary" id="payment_decline_by_tenant">Decline</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PaymentModal;