const AgreementModal = () => {
    return (
        <div>
            <div className="modal" id="modalViewAgreement">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">
                        <i className="icon icon-close-black" data-toggle="modal" data-target="#modalViewAgreement"></i>
                        <div className="modal-body">
                            <div className="embed-responsive embed-responsive-16by9" >
                                <iframe className="embed-responsive-item" id="iframe_agreement"> </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgreementModal;