const { default: Link } = require("next/link")

const ThankYou = () => {
    return (
        <div>
            <div className="py-5 my-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="text-center py-lg-5 my-lg-5">
                                <div className="section-title text-center mb-4">
                                    <h3 className="font-weight-medium title-sm">Thank you for Contacting Us.</h3>
                                </div>
                                <p className="mb-5 lead font-weight-medium">Please contact us at <a className="text-primary" href="mailto:info@spacematch.co.za">info@spacematch.co.za</a> if you need any other information.</p>
                                <Link href="/" className="btn btn-sm btn-primary" >
                                    Go To Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ThankYou;