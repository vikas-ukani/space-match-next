const ChatModal = () => {
    return (
        <div>
            <div className="modal" id="modalChat">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">

                        <div className="modal-header border-bottom-0">
                            <h4 className="modal-title text-center mx-auto">Chat with Space Owner</h4>

                            <i className="icon icon-close-black" data-dismiss="modal" data-target="#modalChat"></i>
                        </div>

                        <div className="modal-body">
                            <div className="chat-body">
                                <div className="chat-msg chat-msg-left">
                                    <div className="chat-bubble">
                                        <div className="chat-text">
                                            Hi, welcome to SimpleChat! Go ahead and send me a message.
                                        </div>
                                        <div className="chat-info text-right">
                                            <div className="chat-info-time">12:45</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="chat-past-date">July 22, 2019</div>

                                <div className="chat-msg chat-msg-right">
                                    <div className="chat-bubble">
                                        <div className="chat-text">
                                            You can change your name in JS section!
                                        </div>
                                        <div className="chat-info text-right">
                                            <div className="chat-info-time">12:45</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="chat-msg chat-msg-left">
                                    <div className="chat-bubble">
                                        <div className="chat-text">
                                            Hi, welcome to SimpleChat! Go ahead and send me a message.
                                        </div>
                                        <div className="chat-info text-right">
                                            <div className="chat-info-time">12:45</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="chat-past-date">July 22, 2019</div>

                                <div className="chat-msg chat-msg-right">
                                    <div className="chat-bubble">
                                        <div className="chat-text">
                                            You can change your name in JS section!
                                        </div>
                                        <div className="chat-info text-right">
                                            <div className="chat-info-time">12:45</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="chat-msg chat-msg-left">
                                    <div className="chat-bubble">
                                        <div className="chat-text">
                                            Hi, welcome to SimpleChat! Go ahead and send me a message.
                                        </div>
                                        <div className="chat-info text-right">
                                            <div className="chat-info-time">12:45</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="chat-past-date">Yesterday</div>

                                <div className="chat-msg chat-msg-right">
                                    <div className="chat-bubble">
                                        <div className="chat-text">
                                            You can change your name in JS section!
                                        </div>
                                        <div className="chat-info text-right">
                                            <div className="chat-info-time">12:45</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer mb-2 border-top-0 px-4 mx-2">
                            <div className="input-group align-items-center chat-footer">
                                <input type="text" className="form-control" placeholder="Type a message.." />
                                <div className="input-group-prepend">
                                    <button className="btn btn-light">
                                        <i className="icon icon-send"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatModal;