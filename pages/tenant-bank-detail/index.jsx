const index = () => {
    return (
        <div>
            <div class="content-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title border-bottom d-flex align-items-center pb-3 mb-4 ">
                                <h4 class="title-sm">Banking Details</h4>
                            </div>
                        </div>
                        @php
                        $hidden = false;
        if( !empty($bankDetails->documents) )
                        {
            if($bankDetails->documents[0]->document_status == 0)
                        $hidden = true;
        }
                        @endphp
                        <div class="col-lg-12">
                            <form class="form-dashboard" id="bankLandlordForm" name="bankLandlordForm" method="POST" enctype="multipart/form-data" autocomplete="off">
                                <div class="row">
                                    <div class="col-xl-4">
                                        <div class="section-title mb-3">
                                            <h5 class="text-center">Banking Details</h5>
                                        </div>
                                        <div class="row" id="success-message">
                                            <div class="col-lg-12">
                                                <p class="text-success text-center font-weight-medium lead mb-3" id="success-message-show"></p>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Bank</label>
                                            <input type="text" class="form-control" id="bankname" name="bankname" value="{{ !empty($bankDetails->bankname) ? $bankDetails->bankname : ''  }}" @if($hidden) readonly @endif />
                                            <em id="bankname_error" class="error invalid-feedback"></em>
                                        </div>

                                        <div class="form-group">
                                            <label>Name of Account Holder</label>
                                            <input type="text" class="form-control" id="nameaccountholder" name="nameaccountholder" value="{{ !empty($bankDetails->nameaccountholder) ? $bankDetails->nameaccountholder : ''  }}" @if($hidden) readonly @endif />
                                            <em id="nameaccountholder_error" class="error invalid-feedback"></em>
                                        </div>

                                        <div class="form-group">
                                            <label>Account Number</label>
                                            <input type="text" class="form-control" id="accountnumber" name="accountnumber" value="{{ !empty($bankDetails->accountnumber) ? $bankDetails->accountnumber : ''  }}" @if($hidden) readonly @endif />
                                            <em id="accountnumber_error" class="error invalid-feedback"></em>
                                        </div>

                                        <div class="form-group">
                                            <label>Account Type</label>
                                            <select class="select2" id="accounttype" name="accounttype"  @if($hidden) readonly @endif >
                                            <option value="saving" {{ (!empty($bankDetails -> accounttype) && $bankDetails -> accounttype == 'saving') ? 'selected' : ''}}>Saving</option>
                                        <option value="current" {{ (!empty($bankDetails -> accounttype) && $bankDetails -> accounttype == 'current') ? 'selected' : ''}} >Current</option>
                </select>
              </div>

                            <div class="form-group">
                                <label>Branch Code</label>
                                <input type="text" class="form-control" id="branchcode" name="branchcode" value="{{ !empty($bankDetails->branchcode) ? $bankDetails->branchcode : ''  }}" @if($hidden) readonly @endif />
                                <em id="branchcode_error" class="error invalid-feedback"></em>
                            </div>
                        </div>

                        <div class="col-xl-4">
                            <div class="section-title mb-3">
                                <h5 class="text-center">Upload Documents</h5>
                            </div>

                            <div class="form-group">
                                <label class="font-weight-medium">Bank Stamped proof of banking details</label>
                                <div class="custom-file mb-3 d-flex align-items-center" id="bank_proof">
                                    <input type="file" class="custom-file-input" id="bankdocument" name="bankdocument"  @if($hidden) disabled @endif >
                                    <label class="custom-file-label font-weight-bold" for="bankdocument">Upload</label>
                                    {{-- < span class="text-dark-grey"> </> --}}
                                @php
                  if( !empty($bankDetails->documents) )
                                {
                    @endphp
                                <span class="text-dark-grey"> <a href="{{ $bankDetails->documents[0]->document_path}}" download="{{ $bankDetails->documents[0]->document_path}}" target="_blank"> {{ $bankDetails-> documents[0] -> document_name}} </a> </span>
                                @if(!$hidden)
                                <i class="icon icon-delete" style="display:none;"></i>
                                @endif

                                @php
                  }
                                else {
                    @endphp
                                <span class="text-dark-grey"> </span>
                                <i class="icon icon-delete"></i>
                                @php
                  }
                                @endphp
                  </span>

                        </div>
                        <em id="bankdocument_error" class="error invalid-feedback"></em>


                        @php
                if(!empty($bankDetails->documents))
                        {
                    if($bankDetails->documents[0]->document_status == 1) { @endphp
                        <a class="btn btn-rounded btn-success btn-block" id="btn-verified" style="color:white;">Verified</a>
                        <a class="btn btn-rounded btn-warning btn-block" id="btn-pending-approval" style="color:white;display: none;">Pending Approval</a>
                        @php
                    }
                    if($bankDetails->documents[0]->document_status == 0) { @endphp
                        <a class="btn btn-rounded btn-warning btn-block" id="btn-pending-approval" style="color:white;">Pending Approval</a>
                        <a class="btn btn-rounded btn-success btn-block" id="btn-verified" style="display: none;color:white;">Verified</a>
                        @php
                    }
                }
                        else {
                   @endphp
                        <a class="btn btn-rounded btn-success btn-block" id="btn-verified" style="color:white;">Verified</a>
                        <a class="btn btn-rounded btn-warning btn-block" id="btn-pending-approval" style="color:white;">Pending Approval</a>
                        @php
                }
                        @endphp
                    </div>
                </div>
                <em id="bankdocument_status_error" class="error invalid-feedback"></em>
            </div>
            <div class="row border-top pt-4">
                <div class="col-xl-4 ml-auto">
                    <div class="form-group">
                        <input type="hidden" name="bank_id" id="bank_id" value="{{ !empty($bankDetails->id) ? $bankDetails->id : ''  }}">
                            <input type="hidden" name="action_name" id="action_name" value="{{ $is_add_update }}">
                                @if(!$hidden)
                                <button type="button" id="updateDocument" class="btn btn-primary btn-block">Add/Update</button>
                                @endif
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

export default index;