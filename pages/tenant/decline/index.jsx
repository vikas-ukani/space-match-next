import DeclinedSpacesModal from "@/Components/Tenant/RentalManagement/Modals/DeclinedSpacesModal"
import DashboardSideNav from "@/Layouts/Dashboard/DashboardSideNav"
import { axiosCall, useSWRAxios } from "@/lib/useSWRAxios"
import { getDeclinePipelineAPI, getEnquiryByIDAPI } from "@/services/tenant/rental-management.service"
import { redirectToLogin } from "@/utils/route"
import { format, differenceInDays } from "date-fns"
import Link from "next/link"
import { useState } from "react"
import { Modal } from 'react-bootstrap';

const fetchAllAPIData = async (token_type, token) => {
    const Authorization = `${token_type} ${token}`

    /** Get All PENDING APPROVAL */
    // tenant-declined-pipeline
    var ApiData = getDeclinePipelineAPI()
    ApiData.headers.Authorization = Authorization
    const { data: decline_enquiries } = await axiosCall(ApiData)
    return { decline_enquiries }
}

export const getServerSideProps = async ({ req }) => {
    const { token_type, token } = req.cookies
    /** checking for login token authentication... */
    if (!token) return redirectToLogin()
    return {
        props: {
            ...await fetchAllAPIData(token_type, token)
        }
    }
}

const Decline = ({ decline_enquiries }) => {
    const { getSWR } = useSWRAxios()
  
    const [show, setShow] = useState(false)
    const [data, setData] = useState(null)

    const viewEnquiryById = async id => {
        const { data: dataRes} = await getSWR(getEnquiryByIDAPI(id))
        if (dataRes) {
            setShow(true)
            setData(dataRes)
        }
    }

    return (
        <div>
            <DashboardSideNav />

            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title border-bottom d-flex align-items-center pb-3 mb-4 ">
                                <h4 className="title-sm">Declined Spaces</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <table className="table table-striped table-hover dt-responsive">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Properties</th>
                                        <th>Address</th>
                                        <th>Size</th>
                                        <th>Dates</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {decline_enquiries?.map((list, idx) => {
                                        let created_date = format(new Date(list.created_at), 'dd MMMM yyyy')
                                        let start_date = format(new Date(list.enquiry_start_date), 'dd MMMM yyyy')
                                        let end_date = format(new Date(list.enquiry_end_date), 'dd MMMM yyyy')
                                        let total_days = differenceInDays(new Date(list.enquiry_end_date), new Date(list.enquiry_start_date))
                                        return (
                                            <tr key={idx}>
                                                <td>
                                                    {created_date}
                                                </td>
                                                <td>
                                                    <Link href={'/space/' + list.property.slug} target="_blank">
                                                            {list.property.name}
                                                    </Link>
                                                </td>
                                                <td>
                                                    {list.property.full_address}
                                                    {list.property.address_postal_code && (`, ${list.property.full_address}`)}
                                                </td>
                                                <td>{list.property.property_size}{list.property.property_size_type}</td>
                                                <td>
                                                    {/* {format(new Date(list.created_at), 'dd MMMM yyyy')} */}
                                                    {start_date} - {end_date} ( {total_days}
                                                    {total_days > 1
                                                        ? ` days`
                                                        : ` day`
                                                    } )
                                                </td>
                                                <td className="text-right">
                                                    <a className="view-enquiry" onClick={() => viewEnquiryById(list.id)} data-id={list.id}>
                                                        <i className="icon icon-visibility"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* <input type="hidden" name="records_per_page" id="records_per_page" value="{{ $record_per_page }}" /> */}
            {show && <DeclinedSpacesModal show={show} setShow={setShow} data={data} />}

        </div>
    );
}

export default Decline;