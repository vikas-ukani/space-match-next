import DashboardSideNav from "@/Layouts/Dashboard/DashboardSideNav";
import { axiosCall } from "@/lib/useSWRAxios";


export async function getServerSideProps({ req }) {
    const { token_type, token } = req.cookies

    console.log('asd', token_type);

    return {
        props: {
            data: ""
        }
    }
}



const TenantBankDetail = () => {
    return (
        <div>
            <DashboardSideNav />
            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title border-bottom d-flex align-items-center pb-3 mb-4 ">
                                <h4 className="title-sm">Banking Details</h4>
                            </div>
                        </div>
                        {/* @php
                        $hidden = false;
        if( !empty($bankDetails->documents) )
                        {
            if($bankDetails->documents[0]->document_status == 0)
                        $hidden = true;
        }
                        @endphp */}
                        <div className="col-lg-12">
                            <form className="form-dashboard" id="bankLandlordForm" name="bankLandlordForm" method="POST" encType="multipart/form-data" autoComplete="off">
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="section-title mb-3">
                                            <h5 className="text-center">
                                                Banking Details
                                            </h5>
                                        </div>
                                        <div className="row" id="success-message">
                                            <div className="col-lg-12">
                                                <p className="text-success text-center font-weight-medium lead mb-3" id="success-message-show"></p>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Bank</label>
                                            <input type="text" className="form-control" id="bankname" name="bankname"
                                                defaultValue={data?.bankname}
                                            // @if($hidden) readonly @endif 
                                            />
                                            <em id="bankname_error" className="error invalid-feedback"></em>
                                        </div>

                                        <div className="form-group">
                                            <label>Name of Account Holder</label>
                                            <input type="text" className="form-control" id="nameaccountholder" name="nameaccountholder"
                                                defaultValue={data?.nameaccountholder}
                                            // @if($hidden) readonly @endif
                                            />
                                            <em id="nameaccountholder_error" className="error invalid-feedback"></em>
                                        </div>

                                        <div className="form-group">
                                            <label>Account Number</label>
                                            <input type="text" className="form-control" id="accountnumber" name="accountnumber"
                                                defaultValue={data?.accountnumber}
                                            // @if($hidden) readonly @endif 
                                            />
                                            <em id="accountnumber_error" className="error invalid-feedback"></em>
                                        </div>

                                        <div className="form-group">
                                            <label>Account Type</label>
                                            <select className="select2" id="accounttype" name="accounttype"
                                            // @if($hidden) readonly @endif 
                                            >
                                                <option defaultValue="saving"
                                                // {{ (!empty($bankDetails -> accounttype) && $bankDetails -> accounttype == 'saving') ? 'selected' : ''}}
                                                >
                                                    Saving
                                                </option>
                                                <option defaultValue="current"
                                                // {{ (!empty($bankDetails -> accounttype) && $bankDetails -> accounttype == 'current') ? 'selected' : ''}} 
                                                >Current</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Branch Code</label>
                                            <input type="text" className="form-control" id="branchcode" name="branchcode"
                                                defaultValue={data?.branchcode}
                                            // @if($hidden) readonly @endif 
                                            />
                                            <em id="branchcode_error" className="error invalid-feedback"></em>
                                        </div>
                                    </div>

                                    <div className="col-xl-4">
                                        <div className="section-title mb-3">
                                            <h5 className="text-center">Upload Documents</h5>
                                        </div>

                                        <div className="form-group">
                                            <label className="font-weight-medium">Bank Stamped proof of banking details</label>
                                            <div className="custom-file mb-3 d-flex align-items-center" id="bank_proof">
                                                <input type="file" className="custom-file-input" id="bankdocument" name="bankdocument"
                                                    defaultValue={data?.bankdocument}
                                                // @if($hidden) disabled @endif 
                                                />
                                                <label className="custom-file-label font-weight-bold" htmlFor="bankdocument">Upload</label>
                                                {/* {{-- < span className="text-dark-grey"> </> --}} */}
                                                {/* @php
                  if( !empty($bankDetails->documents) )
                                            {
                    @endphp */}
                                                <span className="text-dark-grey"> <a href="{{ $bankDetails->documents[0]->document_path}}" download="{{ $bankDetails->documents[0]->document_path}}" target="_blank">
                                                    {/* {{ $bankDetails-> documents[0] -> document_name}} */}
                                                </a>
                                                </span>
                                                {/* // @if(!$hidden) */}
                                                {/* // <i /className="icon icon-delete" style="display:none;"></i> */}
                                                {/* // @endif */}

                                                {/* // @php */}
                                                {/* //   } */}
                                                {/* // else { */}
                                                {/* // @endphp */}
                                                <span className="text-dark-grey"> </span>
                                                <i className="icon icon-delete"></i>
                                                {/* @php */}
                                                {/* } */}
                                                {/* @endphp */}
                                                {/* </span> */}

                                            </div>
                                            <em id="bankdocument_error" className="error invalid-feedback"></em>


                                            {/* // @php */}
                                            {/* // if(!empty($bankDetails->documents)) */}
                                            {/* // { */}
                                            {/* // if($bankDetails->documents[0]->document_status == 1) {  */}
                                            {/* @endphp */}
                                            {/* <a className="btn btn-rounded btn-success btn-block" id="btn-verified" style={{ color: "white" }}>Verified</a> */}
                                            {/* <a className="btn btn-rounded btn-warning btn-block" id="btn-pending-approval" style={{ color: "white", display: "none" }}>Pending Approval</a> */}
                                            {/* // @php */}
                                            {/* // } */}
                                            {/* // if($bankDetails->documents[0]->document_status == 0) { */}
                                            {/* @endphp */}
                                            {/* <a className="btn btn-rounded btn-warning btn-block" id="btn-pending-approval" style={{ color: "white" }}>Pending Approval</a> */}
                                            {/* <a className="btn btn-rounded btn-success btn-block" id="btn-verified" style={{ display: 'none', color: "white" }}>Verified</a> */}
                                            {/* // @php */}
                                            {/* // } */}
                                            {/* // } */}
                                            {/* // else { */}
                                            {/* //    @endphp */}
                                            {/* <a className="btn btn-rounded btn-success btn-block" id="btn-verified" style={{ color: "white" }}>Verified</a> */}
                                            {/* <a className="btn btn-rounded btn-warning btn-block" id="btn-pending-approval" style={{ color: "white" }}>Pending Approval</a> */}
                                            {/* // @php */}
                                            {/* // } */}
                                            {/* // @endphp */}
                                        </div>
                                    </div>
                                    <em id="bankdocument_status_error" className="error invalid-feedback"></em>
                                </div>
                                <div className="row border-top pt-4">
                                    <div className="col-xl-4 ml-auto">
                                        <div className="form-group">
                                            <input type="hidden" name="bank_id" id="bank_id"
                                                defaultValue={bankDetails?.id}
                                            />
                                            <input type="hidden" name="action_name" id="action_name"
                                                defaultValue="{{ $is_add_update }}" />
                                            {/* @if(!$hidden) */}
                                            <button type="button" id="updateDocument" className="btn btn-primary btn-block">
                                                Add/Update
                                            </button>
                                            {/* @endif */}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default TenantBankDetail;