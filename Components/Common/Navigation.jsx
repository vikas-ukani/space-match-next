import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { LOGIN_ROUTE } from "@/constants/routes";
import { destroyAuth, getCookie, getUser } from "@/utils/cookies";

const Navigation = () => {
    const router = useRouter()
    const user = getUser()

    useEffect(() => {
        
        console.log('Matiching Route', getCookie('isShowingHeaderNav'));
    }, [])

    const logout = () => {
        destroyAuth()
        router.push(LOGIN_ROUTE)
    }
    return (
        <div>
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link href="/">
                            <a className="navbar-brand d-lg-flex" >
                                <img src="/images/logo.svg" alt="SpaceMatch" />
                            </a>
                        </Link>


                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#mobiletoggle" aria-controls="mobiletoggle" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar top-bar">

                            </span>
                            <span className="icon-bar middle-bar">

                            </span>
                            <span className="icon-bar bottom-bar">

                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="mobiletoggle">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active ">
                                    <Link href="/find-space">
                                        <a className="nav-link">Find space</a>
                                    </Link>
                                </li>
                                <li className="nav-item  ">
                                    <Link href="/space-owner">
                                        <a className="nav-link" >space owner</a>
                                    </Link>
                                </li>
                                <li className="nav-item  ">
                                    <Link href="/space-user">
                                        <a className="nav-link" >space user</a>
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link href="/contact-us">
                                        <a className="nav-link" href="/contact-us">Contact Us</a>
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
                                            <Link href="/dashboard" >
                                                <a className="w-100 nav-link dropdown-toggle text-capitalize fa-2x" id="myAccountDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="icon icon-user">
                                                    </span>
                                                    <span title={user?.firstname} >
                                                        {user?.surname}
                                                    </span>
                                                </a>

                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="myAccountDropdown">
                                                {user.user_type == 'landlord' || user.user_type == 'both' && (
                                                    <Link href="/landlord-my-spaces" >
                                                        <a title="My Space" className="dropdown-item" >
                                                            <span>My Space</span>
                                                        </a>
                                                    </Link>
                                                )}
                                                {user.user_type == 'tenant'
                                                    ? (
                                                        <>
                                                            <Link href="/tenant-profile">
                                                                <a title="My Profile" className="dropdown-item">
                                                                    <span>
                                                                        My Profile
                                                                    </span>
                                                                </a>
                                                            </Link>
                                                            <Link href="/dashboard-tenant" >
                                                                <a title="Dashboard" className="dropdown-item" >
                                                                    <span>
                                                                        Dashboard
                                                                    </span>
                                                                </a>
                                                            </Link>
                                                        </>
                                                    )
                                                    :
                                                    user.user_type == 'landlord'
                                                        ?
                                                        <>
                                                            <Link href="/landlord-profile" >
                                                                <a title="My Profile" className="dropdown-item" >
                                                                    <span>My Profile</span>
                                                                </a>
                                                            </Link>
                                                            <Link href="/dashboard-landlord" >
                                                                <a title="Dashboard" className="dropdown-item" >
                                                                    <span>Dashboard</span>
                                                                </a>
                                                            </Link>
                                                        </>
                                                        :
                                                        user.user_type == 'both' && (
                                                            <>
                                                                <Link href="/landlord-profile" >
                                                                    <a title="My Profile" className="dropdown-item" > <span>My Profile</span>
                                                                    </a>
                                                                </Link>
                                                                <Link href="/dashboard" >
                                                                    <a title="Dashboard" className="dropdown-item" > <span>Dashboard</span>
                                                                    </a>
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
                                            <Link href="/auth/register">
                                                <a className="btn btn-outline-light" >register</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link href="/auth/login">
                                                <a className="btn btn-primary">login</a>
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