
import Link from 'next/link'

const Dashboard = () => {

    return (
        <>
            <link rel="stylesheet" href="/css/dashboard.css" />
            <div className="container py-5 mt-5">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-4">
                        <div className="dashboard-box">
                            <div className="box-circle">
                                <p className="sub-text">Tenant</p>
                            </div>
                            <h6 className="box-title">Visit Dashboard</h6>
                            <Link href="/dashboard-tenant" className="btn btn-primary">
                                view
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="dashboard-box">
                            <div className="box-circle">
                                <p className="sub-text">Landlord</p>
                            </div>
                            <h6 className="box-title">Visit Dashboard</h6>
                            <Link href="/dashboard-landlord" className="btn btn-primary">
                                View
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;