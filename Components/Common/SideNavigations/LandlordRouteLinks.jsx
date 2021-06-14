import { getUser } from "@/utils/cookies";

const LandlordRouteLinks = () => {
    const user = getUser()

    return (
        <>
            <li className="@if (Request::is('dashboard-landlord')){{'active'}}@endif">
                <Link href={'/dashboard-landlord'}>
                    <a >
                        <i className="icon icon-dashboard">
                        </i>
                        <span>Dashboard</span>
                    </a>
                </Link>
            </li>
            {user.is_verify_fica_detail == 1 && (
                <>
                    {((user.is_staff == 0 && user.is_verify_fica_detail == 1) || user.is_staff == 1) && (
                        <>
                            <li className="@if (Request::is('landlord-my-spaces')){{'active'}}@endif">
                                <Link href={'/landlord-my-spaces'}>
                                    <a>
                                        <i className="icon icon-space">
                                        </i>
                                        <span>My Spaces</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="@if (Request::is('landlord-add-space')){{'active'}}@endif">
                                <a href={'/landlord-add-space'}>
                                    <i className="icon icon-add-space">
                                    </i>
                                    <span>Add Space</span>
                                </a>
                            </li>
                            <li className="@if (Request::is('landlord-favourite')){{'active'}}@endif">
                                <a href={'/landlord-favourite'}>
                                    <i className="icon icon-view">
                                    </i>
                                    <span>My Favourites</span>
                                </a>
                            </li>
                        </>
                    )}

                    {(user.is_staff == 0 && user.is_verify_fica_detail == 1) && (
                        <li className="@if (Request::is('view-approved-fica-document')){{'active'}}@endif">
                            <a href={'/view-approved-fica-document'}>
                                <i className="icon icon-download">
                                </i>
                                <span>View Approved Agreement Details</span>
                            </a>
                        </li>
                    )}
                    {((user.is_staff == 0 && user.is_verify_fica_detail == 1) || (user.is_staff == 1)) && (
                        <>
                            <li className="@if (Request::is('landlord-rental-pipeline','landlord-rental-history')){{'active'}}@endif">
                                <a href={'/landlord-rental-pipeline'}>
                                    <i className="icon icon-view">
                                    </i>
                                    <span>Rental Pipeline</span>
                                </a>
                            </li>
                            <li className="@if (Request::is('landlord-entity-setup')){{'active'}}@endif">
                                <a href={'/landlord-entity-setup'}>
                                    <i className="icon icon-entity">
                                    </i>
                                    <span>Entity Setup</span>
                                </a>
                            </li>
                            <li className="@if (Request::is('landlord-agreement-template')){{'active'}}@endif">
                                <a href={'/landlord-agreement-template'}>
                                    <i className="icon icon-view">
                                    </i>
                                    <span>Agreement Template</span>
                                </a>
                            </li>
                        </>
                    )}
                    <li className="@if (Request::is('landlord-fica-details')){{'active'}}@endif">
                        <a href={'/landlord-fica-details'}>
                            <i className="icon icon-download align-middle">
                            </i>
                            <span>FICA Details</span>
                        </a>
                    </li>
                    <li className="@if (Request::is('landlord-profile')){{'active'}}@endif">
                        <a href={'/landlord-profile'}>
                            <i className="icon icon-user">
                            </i>
                            <span>My Profile</span>
                        </a>
                    </li>
                    <li className="@if (Request::is('landlord-change-password')){{'active'}}@endif">
                        <a href={'/landlord-change-password'}>
                            <i className="icon icon-visibility-white">
                            </i>
                            <span>Change Password</span>
                        </a>
                    </li>

                    {user.is_staff == 0 &&
                        <li className="@if (Request::is('landlord-bank-detail')){{'active'}}@endif">
                            <a href={'/landlord-bank-detail'}>
                                <i className="icon icon-bank">
                                </i>
                                <span>Banking Details</span>
                            </a>
                        </li>
                    }
                </>
            )}
        </>
    );
}

export default LandlordRouteLinks;