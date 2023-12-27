import Link from "next/link";

const TenantRouteLinks = () => {
    return (
        <>
            <li >
                <Link href={'/dashboard-tenant'}>
                        <i className="icon icon-dashboard"></i>
                        <span>Dashboard</span>
                </Link>
            </li>
            <li >
                <Link href={'/tenant/space-list'}>
                        <i className="icon icon-save"> </i>
                        <span>My Saved Spaces</span>
                </Link>
            </li>
            <li >
                <Link href={'/tenant/rental-management'}>
                        <i className="icon icon-heart"></i>
                        <span>My Rental Management</span>
                </Link>
            </li>
            <li >
                <Link href={'/tenant/favorite'}>
                        <i className="icon icon-view">
                        </i>
                        <span>My Favourites</span>
                </Link>
            </li>
            <li >
                <Link href={'/tenant/decline'}>
                        <i className="icon icon-decline">
                        </i>
                        <span>Declined Spaces</span>
                </Link>
            </li>
            <li >
                <Link href={'/tenant-profile'}>
                        <i className="icon icon-user"></i>
                        <span>My Profile</span>
                </Link>
            </li>
            <li >
                <Link href={'/tenant/change-password'}>
                        <i className="icon icon-visibility-white">
                        </i>
                        <span>Change Password</span>
                </Link>
            </li>
            <li >
                <Link href={'/tenant-bank-detail'}>
                        <i className="icon icon-bank"></i>
                        <span>Banking Details</span>
                </Link>
            </li>
            <li >
                <Link href={'/tenant-fica-details'} >
                        <i className="icon icon-download align-middle">
                        </i>
                        <span>FICA Details</span>
                </Link>
            </li>
        </>
    );
}

export default TenantRouteLinks;