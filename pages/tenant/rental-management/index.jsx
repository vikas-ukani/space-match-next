import PaymentEnquiriesStage from "@/Components/Tenant/RentalManagement/Stages/PaymentEnquiriesStage copy";
import PendingApprovalStage from "@/Components/Tenant/RentalManagement/Stages/PendingApprovalStage";
import SiteVisitEnquiriesStage from "@/Components/Tenant/RentalManagement/Stages/SiteVisitEnquiriesStage";
import DashboardSideNav from "@/Layouts/Dashboard/DashboardSideNav";
import { axiosCall } from "@/lib/useSWRAxios";
import { getPaymentPipelineAPI, getTenantPendingApprovalAPI, getTenantSiteVisitAPI } from "@/services/tenant/rental-management.service";
import { redirectToLogin } from "@/utils/route";

const fetchAllAPIData = async (token_type, token) => {

    const Authorization = `${token_type} ${token}`

    /** Get All PENDING APPROVAL */
    var ApiData = getTenantPendingApprovalAPI()
    ApiData.headers.Authorization = Authorization
    const { data: pending_enquiries } = await axiosCall(ApiData)

    /** get all SITE VISITS */
    var ApiData = getTenantSiteVisitAPI()
    ApiData.headers.Authorization = Authorization
    const { data: site_visit_enquiries } = await axiosCall(ApiData)

    /** get all Payment Pipelines */
    var ApiData = getPaymentPipelineAPI()
    ApiData.headers.Authorization = Authorization
    const { data: payment_enquiries } = await axiosCall(ApiData)

    return { pending_enquiries, site_visit_enquiries, payment_enquiries }
}

export const getServerSideProps = async (ctx) => {
    const { token_type, token } = ctx.req.cookies

    /** checking for login token authentication... */
    if (!token) return redirectToLogin()

    return {
        props: {
            ...await fetchAllAPIData(token_type, token)
        }
    }
}

const RentalManagement = ({
    pending_enquiries,
    site_visit_enquiries,
    payment_enquiries
}) => {
    return (
        <div>
            <DashboardSideNav />
            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title border-bottom d-sm-flex align-items-center pb-3 mb-4 ">
                                <h4 className="title-sm">My Rental Management</h4>
                                <div className="ml-auto mt-sm-0 mt-3 d-inline-block">
                                    <a href="{{url('/tenant-rental-history')}}" className="text-primary font-weight-bold">
                                        <i className="icon icon-history mr-1"></i>
                                        Rental History
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card-wrapper-inner">
                            <div className="card-wrapper-row">
                                <div className="d-flex">
                                    <div className="row flex-nowrap">
                                        <div className="row-column">
                                            <div className="card-title">
                                                <p className="text-uppercase">Pending Approval</p>
                                            </div>
                                            <PendingApprovalStage pending_enquiries={pending_enquiries} />
                                        </div>
                                        <div className="row-column">
                                            <div className="card-title">
                                                <p className="text-uppercase">Site Visits</p>
                                            </div>
                                            <SiteVisitEnquiriesStage site_visit_enquiries={site_visit_enquiries} />
                                        </div>

                                        <div className="row-column">
                                            <div className="card-title">
                                                <p className="text-uppercase">Approved/Legal Agreement</p>
                                            </div>

                                            <div id="approve_legal_agreement"></div>
                                        </div>

                                        <div className="row-column">
                                            <div className="card-title">
                                                <p className="text-uppercase">Payment</p>
                                            </div>

                                            <PaymentEnquiriesStage payment_enquiries={payment_enquiries} />
                                        </div>
                                        <div className="row-column">
                                            <div className="card-title">
                                                <p className="text-uppercase">Confirmed</p>
                                            </div>

                                            <div id="confirmed"></div>
                                        </div>
                                        <div className="row-column">
                                            <div className="card-title">
                                                <p className="text-uppercase">Withdraw / Declined</p>
                                            </div>
                                            <div id="withdraw_declined"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="hidden" name="csrf-token" id="csrf-token" value="{!! csrf_token() !!}" />
            </div>
        </div>
    );
}

export default RentalManagement;