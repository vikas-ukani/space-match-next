import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../lib/callAPI/call";
import { getAuthToken } from "../store/auth/authSlice";
import DashboardSideNav from "@/Layouts/Dashboard/DashboardSideNav";

const DashboardTenant = () => {
    let initialCounts = {
        my_saved_enquiry: 0,
        enquiry_sent_to_space_owners: 0,
        enquiry_legal_agreement: 0,
        enquiry_pending_payment: 0
    }
    const [counts, setCounts] = useState(initialCounts)
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(async () => {
        let check = await dispatch(getAuthToken())
        let tokenData = check.payload;

        if (tokenData && tokenData.token_type) {
            const Header = {
                headers: {
                    Authorization: tokenData.token_type + " " + tokenData.token,
                    Accept: 'application/json',
                }
            }
            let response = await getData('/get-tenant-dashboard-count', Header)
            const { data } = response
            setCounts({
                my_saved_enquiry: data[0],
                enquiry_sent_to_space_owners: data[1],
                enquiry_legal_agreement: data[2],
                enquiry_pending_payment: data[3]
            })
        }
    }, [])

    return (
        <div>
            <DashboardSideNav />
            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="dashboard-box">
                                <div className="box-circle">
                                    <p>{counts.my_saved_enquiry}</p>
                                    {/* <p>{!!$my_saved_enquiry!!}</p> */}
                                </div>
                                <h6 className="box-title">My Saved Enquiries</h6>
                                <a href="/tenant/rental-management" target="_blank" className="btn btn-primary">view</a>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="dashboard-box">
                                <div className="box-circle">
                                    <p>{counts.enquiry_sent_to_space_owners}</p>
                                    {/* <p>{!!$enquiry_sent_to_space_owners!!}</p> */}
                                </div>
                                <h6 className="box-title">Enquiries sent to Space Owners</h6>
                                <a href="/tenant/rental-management" target="_blank" className="btn btn-primary">view</a>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="dashboard-box">
                                <div className="box-circle">
                                    <p>{counts.enquiry_legal_agreement}</p>
                                    {/* <p>{!!$enquiry_legal_agreement!!}</p> */}
                                </div>
                                <h6 className="box-title">Approved enquiries awaiting<br />Legal agreement finalisation</h6>
                                <a href="/tenant/rental-management" target="_blank" className="btn btn-primary">view</a>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="dashboard-box">
                                <div className="box-circle">
                                    <p>{counts.enquiry_pending_payment}</p>
                                    {/* <p>{!!$enquiry_pending_payment!!}</p> */}
                                </div>
                                <h6 className="box-title">Pending payment to reserve space</h6>
                                <a href="/tenant/rental-management" target="_blank" className="btn btn-primary">view</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export const getStaticProps = async (ctx) => {


//     // const user = {}
//     // const user = await localStorage.getItem('userDetails')

//     return {
//         props: {
//             user: {}
//         }
//     }
// }


export default DashboardTenant;