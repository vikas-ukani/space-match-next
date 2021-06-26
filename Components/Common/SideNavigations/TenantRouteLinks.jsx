import Link from "next/link";

const TenantRouteLinks = () => {
    return (
        <>
            <li >
                <Link href={'/dashboard-tenant'}>
                    <a >
                        <i className="icon icon-dashboard"></i>
                        <span>Dashboard</span>
                    </a>
                </Link>
            </li>
            <li >
                <Link href={'/tenant/space-list'}>
                    <a >
                        <i className="icon icon-save"> </i>
                        <span>My Saved Spaces</span>
                    </a>
                </Link>
            </li>
            <li >
                <Link href={'/tenant/rental-management'}>
                    <a>
                        <i className="icon icon-heart"></i>
                        <span>My Rental Management</span>
                    </a>
                </Link>
            </li>
            <li >
                <Link href={'/tenant/favorite'}>
                    <a>
                        <i className="icon icon-view">
                        </i>
                        <span>My Favourites</span>
                    </a>
                </Link>
            </li>
            <li >
                <Link href={'/tenant/decline'}>
                    <a >
                        <i className="icon icon-decline">
                        </i>
                        <span>Declined Spaces</span>
                    </a>
                </Link>
            </li>
            <li >
                <Link href={'/tenant-profile'}>
                    <a >
                        <i className="icon icon-user"></i>
                        <span>My Profile</span>
                    </a>
                </Link>
            </li>
            <li >
                <Link href={'/tenant/change-password'}>
                    <a >
                        <i className="icon icon-visibility-white">
                        </i>
                        <span>Change Password</span>
                    </a>
                </Link>
            </li>
            <li >
                <Link href={'/tenant-bank-detail'}>
                    <a>
                        <i className="icon icon-bank"></i>
                        <span>Banking Details</span>
                    </a>
                </Link>
            </li>
            <li >
                <Link href={'/tenant-fica-details'} >
                    <a >
                        <i className="icon icon-download align-middle">
                        </i>
                        <span>FICA Details</span>
                    </a>
                </Link>
            </li>
        </>
    );
}

export default TenantRouteLinks;