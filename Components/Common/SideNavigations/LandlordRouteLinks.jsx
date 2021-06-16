import { getUser } from "@/utils/cookies";

const LandlordRouteLinks = () => {
    const user = getUser()

    return (
        <>
            <li>
                <Link href={'/dashboard-landlord'}>
                    <a>
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
                            <li>
                                <Link href={'/landlord-my-spaces'}>
                                    <a>
                                        <i className="icon icon-space">
                                        </i>
                                        <span>My Spaces</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <a href={'/landlord-add-space'}>
                                    <i className="icon icon-add-space">
                                    </i>
                                    <span>Add Space</span>
                                </a>
                            </li>
                            <li>
                                <a href={'/landlord-favourite'}>
                                    <i className="icon icon-view">
                                    </i>
                                    <span>My Favourites</span>
                                </a>
                            </li>
                        </>
                    )}

                    {(user.is_staff == 0 && user.is_verify_fica_detail == 1) && (
                        <li>
                            <a href={'/view-approved-fica-document'}>
                                <i className="icon icon-download">
                                </i>
                                <span>View Approved Agreement Details</span>
                            </a>
                        </li>
                    )}
                    {((user.is_staff == 0 && user.is_verify_fica_detail == 1) || (user.is_staff == 1)) && (
                        <>
                            <li>
                                <a href={'/landlord-rental-pipeline'}>
                                    <i className="icon icon-view">
                                    </i>
                                    <span>Rental Pipeline</span>
                                </a>
                            </li>
                            <li>
                                <a href={'/landlord-entity-setup'}>
                                    <i className="icon icon-entity">
                                    </i>
                                    <span>Entity Setup</span>
                                </a>
                            </li>
                            <li>
                                <a href={'/landlord-agreement-template'}>
                                    <i className="icon icon-view">
                                    </i>
                                    <span>Agreement Template</span>
                                </a>
                            </li>
                        </>
                    )}
                    <li>
                        <a href={'/landlord-fica-details'}>
                            <i className="icon icon-download align-middle">
                            </i>
                            <span>FICA Details</span>
                        </a>
                    </li>
                    <li>
                        <a href={'/landlord-profile'}>
                            <i className="icon icon-user">
                            </i>
                            <span>My Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href={'/landlord-change-password'}>
                            <i className="icon icon-visibility-white">
                            </i>
                            <span>Change Password</span>
                        </a>
                    </li>

                    {user.is_staff == 0 &&
                        <li>
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