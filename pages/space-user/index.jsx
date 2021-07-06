const SpaceUser = () => {
    return (
        <div>
            <div className="section-spacebanner overlay" style={{ backgroundImage: "url('images/banner4.jpg')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 align-items-center">
                            <div className="listspace-left pl-0 text-white">
                                <p className="font-weight-bold text-uppercase mb-2">How it works</p>

                                <div className="section-title mb-2">
                                    <h1 className="title-xl">For Space Users</h1>
                                </div>

                                <div className="listspace-title mb-4 pb-2">
                                    <h6>From shopping malls to market stalls
                                        <br />
                                        we accept spaces big and small.</h6>
                                </div>
                                <a href="/" className="btn btn-primary">go find your space</a>
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
                                <h4 className="title-md text-center">Renting a space couldn’t be simpler</h4>
                            </div>
                            <p className="text-center text-grey mt-2">with Hundreds of Listings to Choose from, you can Find the Ideal Space (or Spaces) for you</p>
                        </div>

                        <div className="row earn-carousel text-center">
                            <div className="earn-items col-md-3 p-5">
                                <div className="icon-circle">
                                    <i className="icon icon-find shake"></i>
                                </div>
                                <p className="text-uppercase mb-2">search for spaces</p>
                                <span className="text-grey">Browse countless possibilities on the user-friendly SpaceMatch platform.</span>
                            </div>

                            <div className="earn-items col-md-3 p-5">
                                <div className="icon-circle">
                                    <i className="icon icon-playlist shake"></i>
                                </div>
                                <p className="text-uppercase mb-2">sign up to spacematch</p>
                                <span className="text-grey">We need to get the admin out of the way, so once you’re serious about renting some Space, you’ll need to register to allow us to process your needs further. It’s a quick and easy process, so nothing to slow down your Space occupation!</span>
                            </div>

                            <div className="earn-items col-md-3 p-5">
                                <div className="icon-circle">
                                    <i className="icon icon-announcement shake"></i>
                                </div>
                                <p className="text-uppercase mb-2">make space enquiries</p>
                                <span className="text-grey">Log your rental requests for the Space Owners to approve. Make as many inquiries as you like and find the one that suits you best.</span>
                            </div>

                            <div className="earn-items col-md-3 p-5">
                                <div className="icon-circle">
                                    <i className="icon icon-beenhere shake"></i>
                                </div>
                                <p className="text-uppercase mb-2">occupy your space</p>
                                <span className="text-grey">Once your Space request has been approved, you’ll need to get the paperwork out the way – but its all done online and without delay, so you soon be focussed on getting set up and started in your rented Space.</span>
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
                                <img src="images/sidebanner3.jpg" className="img-fluid h-100" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="why-list bg-dark text-white h-100">
                                <h5 className="text-uppercase">why spacematch</h5>

                                <ul>
                                    <li>Connect with your potential customers</li>
                                    <li>SpaceMatch allows short term rentals, not normally available</li>
                                    <li>The SpaceMatch process allows the quickest time to occupationM</li>
                                    <li>Compare multiple options and select what is best for you</li>
                                    <li>Boost your brand awareness and your sales</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SpaceUser;