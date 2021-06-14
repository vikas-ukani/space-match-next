import Link from "next/link";

const TenantRouteLinks = () => {
    return (
        <>
            <li className="@if (Request::is('dashboard-tenant')){{'active'}}@endif">
                <Link href={'/dashboard-tenant'}>
                    <a >
                        <i className="icon icon-dashboard">

                        </i>
                        <span>Dashboard</span>
                    </a>
                </Link>
            </li>
            <li className="@if (Request::is('tenant-spacelist')){{'active'}}@endif">
                <a href={'/tenant-spacelist'}>
                    <i className="icon icon-save">

                    </i>
                    <span>My Saved Spaces</span>
                </a>
            </li>
            <li className="@if (Request::is('tenant-rental-management','tenant-rental-history')){{'active'}}@endif">
                <a href={'/tenant-rental-management'}>
                    <i className="icon icon-heart"></i>
                    <span>My Rental Management</span>
                </a>
            </li>
            <li className="@if (Request::is('tenant-favourite')){{'active'}}@endif">
                <a href={'/tenant-favourite'}>
                    <i className="icon icon-view">

                    </i>
                    <span>My Favourites</span>
                </a>
            </li>
            <li className="@if (Request::is('tenant-decline')){{'active'}}@endif">
                <a href={'/tenant-decline'}>
                    <i className="icon icon-decline">

                    </i>
                    <span>Declined Spaces</span>
                </a>
            </li>
            <li className="@if (Request::is('tenant-profile')){{'active'}}@endif">
                <Link href={'/tenant-profile'}>
                    <a >
                        <i className="icon icon-user"></i>
                        <span>My Profile</span>
                    </a>
                </Link>
            </li>
            <li className="@if (Request::is('tenant/change-password')){{'active'}}@endif">
                <a href={'/tenant/change-password'}>
                    <i className="icon icon-visibility-white">
                    </i>
                    <span>Change Password</span>
                </a>
            </li>
            <li className="@if (Request::is('tenant-bank-detail')){{'active'}}@endif">
                <a href={'/tenant-bank-detail'}>
                    <i className="icon icon-bank">

                    </i>
                    <span>Banking Details</span>
                </a>
            </li>
            <li className="@if (Request::is('tenant-fica-details')){{'active'}}@endif">
                <a href={'/tenant-fica-details'}>
                    <i className="icon icon-download align-middle">
                    </i>
                    <span>FICA Details</span>
                </a>
            </li>
        </>
    );
}

export default TenantRouteLinks;