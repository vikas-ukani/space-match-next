const SpaceOwner = () => {
    return (
        <div>
            <div className="section-spacebanner overlay" style={{ backgroundImage: "url('images/banner3.jpg')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 align-items-center">
                            <div className="listspace-left pl-0 text-white">
                                <p className="font-weight-bold text-uppercase mb-2">How it works</p>

                                <div className="section-title mb-2">
                                    <h1 className="title-xl">For Space Owners</h1>
                                </div>

                                <div className="listspace-title mb-4 pb-2">
                                    <h6>Get your space in front of thousands of brands</h6>
                                </div>
                                <a href="/" className="btn btn-primary">go list your space</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-earn">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h4 className="title-md text-center">List your space on SpaceMatch and get free access to countless new tenants</h4>
                            </div>
                            <p className="text-center text-grey mt-2">Simple Process to List and Earn Rental Revenues not Previously Exposed to</p>
                        </div>

                        <div className="col-md-12">
                            <div className="row earn-carousel text-center m-2">
                                <div className="earn-items col-md-3 p-5">
                                    <div className="icon-circle">
                                        <i className="icon icon-announcement shake"></i>
                                    </div>
                                    <p className="text-uppercase mb-2">agree space match terms</p>
                                    <span className="text-grey text-justify">Before we can list your vacant Space to prospective tenants, we need to get the admin out of the way. You’ll need to register as a Space Owner, and then you’ll need to sign the SpaceMatch Space Owner Agreement and accept the standard SpaceMatch legal agreements to be used. Once this short process is done you can move on to the exciting part!</span>
                                </div>

                                <div className="earn-items col-md-3 p-5">
                                    <div className="icon-circle">
                                        <i className="icon icon-location shake"></i>
                                    </div>
                                    <p className="text-uppercase mb-2">list your spaces</p>
                                    <span className="text-grey text-justify">In just a few minutes you will be able to list vacant sites and expose them to the community of prospective tenants. There’s no cost to listing as many Spaces as you like. SpaceMatch will need to sign off on the content to ensure the site remains of a very high standard, but that process is quick and you should be ready to receive rental applications in no time. Should you require photographic assistance to better market your Spaces, SpaceMatch also offers this as an additional service.</span>
                                </div>

                                <div className="earn-items col-md-3 p-5">
                                    <div className="icon-circle">
                                        <i className="icon icon-add-user shake"></i>
                                    </div>
                                    <p className="text-uppercase mb-2">connect to new tenants</p>
                                    <span className="text-grey text-justify">Once your Spaces are listed, your Space will be exposed to countless potential tenants. You’ll still retain the right to approve or decline any application that is received, so the power stays with you.</span>
                                </div>

                                <div className="earn-items col-md-3 p-5">
                                    <div className="icon-circle">
                                        <i className="icon icon-grade shake"></i>
                                    </div>
                                    <p className="text-uppercase mb-2">sit back and reap the rewards</p>
                                    <span className="text-grey text-justify">With most of the administration done on your behalf through the SpaceMatch process, you can wait for rental revenues to be paid across as your Spaces are occupied. SpaceMatch only takes their commission once the Space is occupied so there really is only upside for Space Owners.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="section-why">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="why-image h-100 text-center">
                                <img src="images/sidebanner2.jpg" className="img-fluid h-100" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="why-list bg-dark text-white h-100">
                                <h5 className="text-uppercase">why spacematch</h5>
                                <ul>
                                    <li>Generate additional revenue</li>
                                    <li>Maximise the utilisation of your vacant spaces</li>
                                    <li>Let SpaceMatch handle all the administration</li>
                                    <li>There’s no cost to list – commissions only payable on actual utilisation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    );
}



export default SpaceOwner;