import Link from "next/link";
import router, { useRouter } from "next/router";

import { LOGIN_ROUTE } from "@/constants/routes";
import { destroyAuth, getUser } from "@/utils/cookies";

const Navigation = () => {
    // const router = useRouter()
    const user = getUser()

    const logout = () => {
        destroyAuth()
        router.push(LOGIN_ROUTE)
    }
    return (
        <div>
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link href="/" className="navbar-brand d-lg-flex" >
                            <img src="/images/logo.svg" alt="SpaceMatch" />
                        </Link>


                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#mobiletoggle" aria-controls="mobiletoggle" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="icon-bar top-bar"> </i>
                            <i className="icon-bar middle-bar"></i>
                            <i className="icon-bar bottom-bar"></i>
                        </button>

                        {/*  */}
                        <div className="collapse navbar-collapse" id="mobiletoggle">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item  ">
                                    <Link href="/find-space" className="nav-link">
                                        Find space
                                    </Link>
                                </li>
                                <li className="nav-item  ">
                                    <Link href="/space-owner" className="nav-link">
                                        space owner
                                    </Link>
                                </li>
                                <li className="nav-item  ">
                                    <Link href="/space-user" className="nav-link">
                                        space user
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link href="/contact-us" className="nav-link" >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                            {user
                                ? (
                                    <ul className="navbar-nav ml-auto navbar-loggedin align-items-lg-center">
                                        {/* <li className="nav-item nav-dashboard">
                                            <Link href="/dashboard" >
                                                <a title="Dashboard" className="nav-link text-truncate">
                                                    <span className="icon icon-dashboard mr-2">
                                                    </span>
                                                Dashboard
                                                </a>
                                            </Link>
                                        </li> */}
                                        <li className="nav-item dropdown">
                                            <Link href="/dashboard" className="w-100 nav-link dropdown-toggle text-capitalize fa-2x" id="myAccountDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="icon icon-user"></i>
                                                <span title={user?.firstname} >
                                                    {user?.surname}
                                                </span>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="myAccountDropdown">
                                                {user.user_type == 'landlord' || user.user_type == 'both' && (
                                                    <Link href="/landlord-my-spaces" title="My Space" className="dropdown-item" >
                                                        <span>My Space</span>
                                                    </Link>
                                                )}
                                                {user.user_type == 'tenant'
                                                    ? (
                                                        <>
                                                            <Link href="/tenant-profile" title="My Profile" className="dropdown-item">
                                                                <span>
                                                                    My Profile
                                                                </span>
                                                            </Link>
                                                            <Link href="/dashboard-tenant" title="Dashboard" className="dropdown-item" >
                                                                <span>
                                                                    Dashboard
                                                                </span>
                                                            </Link>
                                                        </>
                                                    )
                                                    :
                                                    user.user_type == 'landlord'
                                                        ?
                                                        <>
                                                            <Link href="/landlord-profile" title="My Profile" className="dropdown-item">
                                                                <span>My Profile</span>
                                                            </Link>
                                                            <Link href="/dashboard-landlord" title="Dashboard" className="dropdown-item">
                                                                <span>Dashboard</span>
                                                            </Link>
                                                        </>
                                                        :
                                                        user.user_type == 'both' && (
                                                            <>
                                                                <Link href="/landlord-profile" title="My Profile" className="dropdown-item" >
                                                                    <span>My Profile</span>
                                                                </Link>
                                                                <Link href="/dashboard" title="Dashboard" className="dropdown-item" >
                                                                    <span>Dashboard</span>
                                                                </Link>
                                                            </>
                                                        )
                                                }

                                                <div className="dropdown-divider">

                                                </div>
                                                <a className="dropdown-item dropdown-logout" onClick={() => logout()}>
                                                    <span>Logout</span>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                )
                                : (
                                    <ul className="navbar-nav ml-auto navbar-login">
                                        <li className="nav-item ">
                                            <Link href="/auth/register" className="btn btn-outline-light">
                                                Register
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link href="/auth/login" className="btn btn-primary">
                                                Login
                                            </Link>
                                        </li>
                                    </ul>
                                )
                            }
                        </div >
                    </div >
                </nav >
            </header >
        </div >
    );
}

export default Navigation;