import Link from "next/link";
import { useEffect, useState } from "react";
import { getData } from "../../lib/callAPI/call";

const FooterBottom = () => {
    const [footerMalls, setFooterMalls] = useState()
    const [footerCities, setFooterCities] = useState()
    useEffect(async () => {
        let response = await getData('/space-malls?featured=1')
        let footer_data = response.data;
        setFooterMalls(footer_data)

        let responseCities = await getData('/space-cities?featured=1')
        let footer_cities = responseCities.data;
        setFooterCities(footer_cities)
    }, [])

    return (
        <div>
            <div className="footer-search bg-dark d-flex d-lg-none">
                {/* <a className="chat toggle-map" href="" onClick={( ) => {}}">
                    <i className="icon icon-map-white"></i>
                </a> */}
                <a className="search" href="">
                    <i className="icon icon-search"></i>
                </a>
            </div>
            <footer className="footer bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="footer-link">
                                <h6 className="text-uppercase mb-2">
                                    <Link href="/" className="d-inline-block">
                                        <img src="/images/logo-footer.svg" className="img-fluid d-block" alt="SpaceMatch" />
                                    </Link>
                                </h6>
                                <ul>
                                    <li>
                                        <Link href="/about-us" >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/company" >
                                            Company
                                        </Link>
                                    </li>
                                    <li className="dropdown">
                                        <Link href="/" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            How
                                            <span className="text-capitalize">SpaceMatch</span> works
                                        </Link>
                                        <div className="dropdown-menu">
                                            <Link href="/space-user" className="dropdown-item">
                                                Find space
                                            </Link>
                                            <Link href="/space-owner" className="dropdown-item">
                                                List space
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <Link href="/faq" >
                                            Faq's
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/popup-trend">
                                            #startsomething
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blogs" >
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-link footer-social">
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                        <Link href="https://web.facebook.com/SpaceMatch.ZA/" rel="noreferrer" target="_blank">
                                            <i className="icon icon-facebook shake"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="https://www.instagram.com/spacematch_za/" rel="noreferrer" target="_blank">
                                            <i className="icon icon-instagram shake"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link href="https://www.linkedin.com/company/spacematch/" rel="noreferrer" target="_blank">
                                            <i className="icon icon-linkedin shake"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="footer-link footer-contact">
                                <h6 className="text-uppercase">Contact Us</h6>
                                <div className="pt-2">
                                    <a id="emailUsLink" href="mailto:info@spacematch.co.za">info@spacematch.co.za</a>
                                </div>
                                <p>Send us an email and we will get back to you within 24 hours</p>
                            </div>

                            <div className="footer-link footer-message">
                                <h6 className="text-uppercase">NEWS</h6>
                                <p>Subscribe and we will add you to our monthly newsletter featuring spaces, trends and inspiration </p>
                                <div className="row" id="contact-success-message" style={{ display: 'none' }}>
                                    <div className="col-lg-12">
                                        <p className="text-success text-center font-weight-medium lead mt-3 text-primary" id="contact-success-message-show"></p>
                                    </div>
                                </div>
                                <form className="mt-3" id="contactForm" noValidate>
                                    <div className="form-group">
                                        <input type="text" name="email" id="email" placeholder="Email Address" className="form-control form-control-square" />
                                        <button type="button" id="contactus" className="btn btn-primary">Send</button>
                                    </div>
                                    <em id="email_error" className="error invalid-feedback"></em>

                                    <em id="contactus_error" className="error invalid-feedback"></em>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="footer-list">
                                <div className="row gutters-30 ">
                                    <div className="col-lg-12">
                                        <h4>
                                            <Link href={'/'} className="text-primary">
                                                Find a rental space.
                                            </Link>
                                        </h4>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="footer-link">
                                            <h6 className="mb-1">South Africa’s Shopping Centres</h6>
                                            <Link href={"/all-malls"}>
                                                All Shopping Centres
                                            </Link>
                                            {footerMalls && (
                                                <ul>
                                                    <li><a className="text-uppercase text-white">FEATURED 1</a></li>
                                                    {footerMalls.map(fMall => {
                                                        return (
                                                            <li key={fMall.id}>
                                                                <Link href={"/mall/" + fMall.slug} >
                                                                    {fMall.name}
                                                                </Link>
                                                            </li>
                                                        )
                                                    }
                                                    )}

                                                </ul>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="footer-link">
                                            <h6 className="mb-1">South Africa’s Suburbs & Cities</h6>
                                            <Link href={"/all-cities"}>All Suburbs & Cities</Link>
                                            {footerCities && (<ul>
                                                <li>
                                                    <a className="text-uppercase text-white">FEATURED</a>
                                                </li>
                                                {footerCities.map(city => {
                                                    return (
                                                        <li key={city.id}>
                                                            <Link href={"/city/" + city.slug}>
                                                                {city.name}
                                                            </Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="footer-bottom-link">
                                <li><Link href="/privacy-policy" >Privacy Policy</Link></li>
                                <li><Link href="/terms-and-condition" >Terms of Service</Link></li>
                                <li><Link href="/acceptable-use-policy" >Acceptable Use Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    );
}

export default FooterBottom;