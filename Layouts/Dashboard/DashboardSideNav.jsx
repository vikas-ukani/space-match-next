import { getUser } from "@/utils/cookies";
import { useEffect } from "react";

const DashboardSideNav = () => {
    const user = getUser()
    useEffect(() => {
        console.log("IN")
        return () => {
            console.log("OUT")
        }
    }, [])

    return (
        <div>
            <div id="sidenav">
                <div className="wrapper">
                    <div className="logo">
                        <a href="/">
                            <img src="/images/logo.svg" className="img-fluid" alt="Space Match" />
                        </a>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse">
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <a href="/" className="text-truncate text-white text-capitalize">
                                    <b>Hi, </b>
                                    <span className="font-weight-medium">
                                        {user && user.firstname
                                            ? user.firstname
                                            : 'No User'
                                        }
                                    </span>
                                </a>
                            </li>
                            {/* @if (Request::is('dashboard-tenant','tenant-profile','tenant-spacelist','tenant-favourite','tenant-decline','tenant-rental-management','tenant-rental-history','tenant-change-password','tenant-bank-detail','thank-you-for-sending-enquiry','tenant-edit-enquiry/*','submit-enquiry','thank-you-for-edit-enquiry','tenant-fica-details')) */}

                            <li className="@if (Request::is('dashboard-tenant')){{'active'}}@endif">
                                <a href="{{url( '/dashboard-tenant')}}"><i className="icon icon-dashboard"></i> <span>Dashboard</span></a>
                            </li>
                            <li className="@if (Request::is('tenant-spacelist')){{'active'}}@endif">
                                <a href="{{url( '/tenant-spacelist')}}"><i className="icon icon-save"></i> <span>My Saved Spaces</span></a>
                            </li>
                            <li className="@if (Request::is('tenant-rental-management','tenant-rental-history')){{'active'}}@endif">
                                <a href="{{url('/tenant-rental-management')}}"><i className="icon icon-heart"></i> <span>My Rental Management</span></a>
                            </li>
                            <li className="@if (Request::is('tenant-favourite')){{'active'}}@endif">
                                <a href="{{url( '/tenant-favourite')}}"><i className="icon icon-view"></i> <span>My Favourites</span></a>
                            </li>
                            <li className="@if (Request::is('tenant-decline')){{'active'}}@endif">
                                <a href="{{url( '/tenant-decline')}}"><i className="icon icon-decline"></i> <span>Declined Spaces</span></a>
                            </li>
                            <li className="@if (Request::is('tenant-profile')){{'active'}}@endif">
                                <a href="{{url( '/tenant-profile')}}"><i className="icon icon-user"></i> <span>My Profile</span></a>
                            </li>
                            <li className="@if (Request::is('tenant-change-password')){{'active'}}@endif">
                                <a href="{{url( '/tenant-change-password')}}"><i className="icon icon-visibility-white"></i> <span>Change Password</span></a>
                            </li>
                            <li className="@if (Request::is('tenant-bank-detail')){{'active'}}@endif">
                                <a href="{{url( '/tenant-bank-detail')}}"><i className="icon icon-bank"></i> <span>Banking Details</span></a>
                            </li>
                            <li className="@if (Request::is('tenant-fica-details')){{'active'}}@endif">
                                <a href="{{url( '/tenant-fica-details')}}"><i className="icon icon-download align-middle"></i> <span>FICA Details</span></a>
                            </li>
                            {/* @endif */}
                            {/* @if (Request::is('dashboard-landlord', 'landlord-profile', 'landlord-rental-pipeline','landlord-rental-history','landlord-entity-setup','landlord-my-spaces','landlord-add-space','landlord-change-password','landlord-bank-detail','landlord-agreement-template','view-approved-fica-document', 'landlord-edit-space/*','landlord-space-dates/*', 'add-space-thank-you', 'edit-space-thank-you', 'landlord-fica-details', 'landlord-favourite')) */}

                            <li className="@if (Request::is('dashboard-landlord')){{'active'}}@endif">
                                <a href="{{url('/dashboard-landlord')}}"><i className="icon icon-dashboard"></i> <span>Dashboard</span></a>
                            </li>

                            {/* {{-- //	@if(session()->get('is_verify_fica_detail') == 1) --}} */}

                            {/* @if( (session()->get('is_staff') == 0 && session()->get('is_verify_fica_detail') == 1) || (session()->get('is_staff') == 1 )) */}
                            <li className="@if (Request::is('landlord-my-spaces')){{'active'}}@endif">
                                <a href="{{url('/landlord-my-spaces')}}"><i className="icon icon-space"></i> <span>My Spaces</span></a>
                            </li>
                            <li className="@if (Request::is('landlord-add-space')){{'active'}}@endif">
                                <a href="{{url('/landlord-add-space')}}"><i className="icon icon-add-space"></i> <span>Add Space</span></a>
                            </li>
                            <li className="@if (Request::is('landlord-favourite')){{'active'}}@endif">
                                <a href="{{url( '/landlord-favourite')}}"><i className="icon icon-view"></i> <span>My Favourites</span></a>
                            </li>
                            {/* @endif */}

                            {/* @if(session()->get('is_staff') == 0 && session()->get('is_verify_fica_detail') == 1) */}
                            <li className="@if (Request::is('view-approved-fica-document')){{'active'}}@endif">
                                <a href="{{url('/view-approved-fica-document')}}"><i className="icon icon-download"></i> <span>View Approved Agreement Details</span> </a>
                            </li>
                            {/* @endif */}
                            {/* @if( (session()->get('is_staff') == 0 && session()->get('is_verify_fica_detail') == 1) || (session()->get('is_staff') == 1 )) */}
                            <li className="@if (Request::is('landlord-rental-pipeline','landlord-rental-history')){{'active'}}@endif">
                                <a href="{{url('/landlord-rental-pipeline')}}"><i className="icon icon-view"></i> <span>Rental Pipeline</span></a>
                            </li>
                            <li className="@if (Request::is('landlord-entity-setup')){{'active'}}@endif">
                                <a href="{{url('/landlord-entity-setup')}}"><i className="icon icon-entity"></i> <span>Entity Setup</span></a>
                            </li>
                            <li className="@if (Request::is('landlord-agreement-template')){{'active'}}@endif">
                                <a href="{{url('/landlord-agreement-template')}}"><i className="icon icon-view"></i> <span>Agreement Template</span></a>
                            </li>
                            {/* @endif */}
                            <li className="@if (Request::is('landlord-fica-details')){{'active'}}@endif">
                                <a href="{{url( '/landlord-fica-details')}}"><i className="icon icon-download align-middle"></i> <span>FICA Details</span></a>
                            </li>
                            <li className="@if (Request::is('landlord-profile')){{'active'}}@endif">
                                <a href="{{url( '/landlord-profile')}}"><i className="icon icon-user"></i> <span>My Profile</span></a>
                            </li>
                            <li className="@if (Request::is('landlord-change-password')){{'active'}}@endif">
                                <a href="{{url( '/landlord-change-password')}}"><i className="icon icon-visibility-white"></i> <span>Change Password</span></a>
                            </li>

                            {/* @if(session()->get('is_staff') == 0) */}
                            <li className="@if (Request::is('landlord-bank-detail')){{'active'}}@endif">
                                <a href="{{url( '/landlord-bank-detail')}}"><i className="icon icon-bank"></i> <span>Banking Details</span></a>
                            </li>
                            {/* @endif */}

                            {/* @endif */}
                            <li>
                                <a href="/"><i className="icon icon-home"></i> <span>Back To homepage</span></a>
                            </li>
                            <li>
                                <a className="nav-link" href="#" >
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardSideNav;