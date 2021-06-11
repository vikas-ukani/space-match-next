import LandlordRouteLinks from "@/Components/Common/SideNavigations/LandlordRouteLinks";
import TenantRouteLinks from "@/Components/Common/SideNavigations/TenantRouteLinks";
import { LOGIN_ROUTE } from "@/constants/routes";
import { destroyAuth, getCookie, getUser, setCookie } from "@/utils/cookies";
import router from "next/router";
import { useEffect } from "react";

const DashboardSideNav = () => {
    const user = getUser()
    setCookie('isShowingHeaderNav', false)
    const tenantURLs = ['/dashboard-tenant', '/tenant-profile', '/tenant-spacelist', '/tenant-favourite', '/tenant-decline', '/tenant-rental-management', '/tenant-rental-history', '/tenant-change-password', '/tenant-bank-detail', '/thank-you-for-sending-enquiry', '/tenant-edit-enquiry/*', '/submit-enquiry', '/thank-you-for-edit-enquiry', '/tenant-fica-details']
    const landlordURLs = ['dashboard-landlord', 'landlord-profile', 'landlord-rental-pipeline', 'landlord-rental-history', 'landlord-entity-setup', 'landlord-my-spaces', 'landlord-add-space', 'landlord-change-password', 'landlord-bank-detail', 'landlord-agreement-template', 'view-approved-fica-document', 'landlord-edit-space/*', 'landlord-space-dates/*', 'add-space-thank-you', 'edit-space-thank-you', 'landlord-fica-details', 'landlord-favourite']
    const currentURL = router.asPath

    let isShowingTenantRoute = tenantURLs.includes(currentURL)
    let isShowingLandlordRoute = landlordURLs.includes(currentURL)

    useEffect(() => {
        return () => {
            setCookie('isShowingHeaderNav', true)
        }
    })

    const logoutProcess = () => {
        destroyAuth()
        router.push(LOGIN_ROUTE)
    }

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
                                        {(user && user.firstname) ? user.firstname : 'No User'}
                                    </span>
                                </a>
                            </li>
                            {isShowingTenantRoute && <TenantRouteLinks />}
                            {isShowingLandlordRoute && <LandlordRouteLinks />}
                            <li>
                                <a href="/"><i className="icon icon-home"></i> <span>Back To homepage</span></a>
                            </li>
                            <li>
                                <a className="nav-link" href="" onClick={logoutProcess}>
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