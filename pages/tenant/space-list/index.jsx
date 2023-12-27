import { useEffect, useState } from "react";
import { axiosCall } from "@/lib/useSWRAxios";
import Link from "next/link";
import { format } from "date-fns";
import Swal from 'sweetalert2'

import DashboardSideNav from "@/Layouts/Dashboard/DashboardSideNav";
import { getEnquiriesAPI } from "@/services/tenant/space-list";
import DotsLoading from "@/Components/Loader/DotsLoading";

export const getServerSideProps = async (ctx) => {
    const { token, token_type } = ctx.req.cookies
    let ApiData = await getEnquiriesAPI()
    ApiData.headers.Authorization = `${token_type} ${token}`
    const { data } = await axiosCall(ApiData)
    return {
        props: {
            enquiries: data || null
        }
    }
}

const Specialist = ({ enquiries: enquiriesData }) => {
    const [enquiries, setEnquiries] = useState(enquiriesData)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (enquiries) setLoading(true)
    }, [])

    useEffect(() => {
        if (enquiries && enquiries.length) setLoading(false)
    }, [loading])

    const deleteEnquiry = async id => {

        Swal.fire({
            title: 'Do you want to delete this saved space?',
            showCancelButton: true,
            confirmButtonColor: `#d33`,
            confirmButtonText: `Delete`,
            denyButtonText: `Cancel`,
        }).then((result) => {
            if (result.isConfirmed) {
                let data = enquiries.filter(enquiry => enquiry.id !== id)
                setEnquiries(data)
                Swal.fire({
                    title: 'Deleted!',
                    html: 'Record has been successfully removed.',
                    timer: 1500,
                    timerProgressBar: true
                })
            }
        })




    }
    return (
        <div>
            <DashboardSideNav />
            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title border-bottom pb-3 mb-4 ">
                                <h4 className="title-sm">
                                    My Saved Spaces
                                </h4>
                                <p className="text-grey mt-2">
                                    Use your space list to add more spaces before sending your enquiries to the Space Owners
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12" >
                            {loading && <DotsLoading />}
                            {enquiries?.map((enquiry, idx) => {
                                return (
                                    <div key={idx}>
                                        <div className="list-space-card d-xl-flex align-items-lg-center">
                                            <div className="form-group">
                                                {(enquiry?.status_id == 1 || enquiry?.status_id == 4) && (
                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id={`selectspace_${enquiry?.id}`} value={enquiry?.id} />
                                                        <label className="custom-control-label pl-0" htmlFor={`selectspace_${enquiry?.id}`} >&nbsp;</label>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="form-group">
                                                <div className="list-space-card-image">
                                                    <img className="img-fluid" alt=""
                                                        src={enquiry?.property?.spacePropertyImages[0]?.property_image_path}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <div className="space-item">
                                                    <a className="space-title text-truncate" >
                                                        {enquiry?.property?.name}
                                                    </a>
                                                    <div>
                                                        <p className="space-address text-truncate">
                                                            {enquiry?.property?.full_address}
                                                        </p>
                                                        <p className="space-size">
                                                            {enquiry?.property?.property_size} {enquiry?.property?.property_size_type}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="space-price">
                                                            R {enquiry?.property_rate_details?.tenant_amount_with_vat.replace(' ', ',')}
                                                            <span className="space-size"> for {enquiry?.property_rate_details?.total_days} day
                                                            </span>
                                                        </p>
                                                    </div>

                                                    <div className="mt-1 mb-lg-0 mb-3">
                                                        <span className="text-dark-grey font-weight-medium d-block d-lg-inline mb-2">Would you like a site visit?</span>
                                                        <div className="custom-control custom-checkbox custom-control-inline mr-4 ml-lg-4">
                                                            <input type="radio" className="custom-control-input" id={`sitevisitYes${enquiry?.id}`} value="1" name={`sitevisit_${enquiry?.id}`} defaultChecked={enquiry?.site_visit == "1"} />
                                                            <label className="custom-control-label" htmlFor={`sitevisitYes${enquiry?.id}`}>Yes</label>
                                                        </div>

                                                        <div className="custom-control custom-checkbox custom-control-inline">
                                                            <input type="radio" className="custom-control-input" id={`sitevisitNo${enquiry?.id}`} value="0" name={`sitevisit_${enquiry?.id}`} defaultChecked={enquiry?.site_visit == "1"} />
                                                            <label className="custom-control-label" htmlFor={`sitevisitNo${enquiry?.id}`}>No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="list-space-date flex-column">
                                                    <p className="btn font-weight-medium bg-light-grey mb-2 cursor-unset">
                                                        <span className="text-dark-grey text-capitalize">Start: </span>
                                                        {format(new Date(enquiry?.enquiry_start_date), 'dd/MM/yyyy')}
                                                    </p>
                                                    <p className="btn font-weight-medium bg-light-grey mb-2 ml-0 mt-0 cursor-unset">
                                                        <span className="text-dark-grey text-capitalize">End: </span>
                                                        {format(new Date(enquiry?.enquiry_end_date), 'dd/MM/yyyy')}
                                                    </p>

                                                </div>
                                                <div className="list-space-date text-center">
                                                    Status - <span className="font-weight-bold">
                                                        {enquiry?.status?.status_display_to_tenant}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="form-group text-right ">
                                                <Link href={`/tenant-edit-enquiry/${enquiry?.id}`} className="enquiry-edit  mt-2">
                                                    <i className="icon icon-circle-edit"></i>
                                                </Link>

                                                <a onClick={() => deleteEnquiry(enquiry?.id)}>
                                                    <i className="icon icon-circle-delete"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="col-lg-12">
                            <div className="d-lg-flex justify-content-between mt-2">
                                <div className="form-group">
                                    <Link href="/find-space" className="btn btn-outline-dark">
                                        Add more space
                                    </Link>
                                </div>
                                <div className="form-group text-right">
                                    <button type="button" className="btn btn-primary btn-block" >Send to Space Owner</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Specialist;