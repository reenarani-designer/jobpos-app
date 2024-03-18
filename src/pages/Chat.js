import React from "react";
function ChatBox(){
    return(
        <>
    <section className="message-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="chat-area">
                        <div className="chatlist">
                            <div className="modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="chat-header">
                                        <div className="msg-search">
                                            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search" aria-label="search" />
                                            <a className="add" href="#"><img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/add.svg" alt="add" /></a>
                                        </div>

                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="Open-tab" data-bs-toggle="tab" data-bs-target="#Open" type="button" role="tab" aria-controls="Open" aria-selected="true">Open</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="Closed-tab" data-bs-toggle="tab" data-bs-target="#Closed" type="button" role="tab" aria-controls="Closed" aria-selected="false">Closed</button>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="modal-body">
                                        <div className="chat-lists">
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active" id="Open" role="tabpanel" aria-labelledby="Open-tab">
                                                    <div className="chat-list">
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                                <span className="active"></span>
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Mehedi Hasan</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Ryhan</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Malek Hasan</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Sadik Hasan</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Bulu </h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Maria SK</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Dipa Hasan</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Jhon Hasan</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Tumpa Moni</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Payel Akter</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Baby Akter</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Zuwel Rana</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Habib </h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Jalal Ahmed</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Hasan Ali</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Mehedi Hasan</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>


                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="Closed" role="tabpanel" aria-labelledby="Closed-tab">

                                                    <div className="chat-list">
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                                <span className="active"></span>
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Mehedi Hasan</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Ryhan</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Malek Hasan</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Sadik Hasan</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Bulu </h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Maria SK</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Dipa Hasan</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Jhon Hasan</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Tumpa Moni</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Payel Akter</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Baby Akter</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Zuwel Rana</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Habib </h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Jalal Ahmed</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Hasan Ali</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="d-flex align-items-center">
                                                            <div className="flex-shrink-0">
                                                                <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <h3>Mehedi Hasan</h3>
                                                                <p>front end developer</p>
                                                            </div>
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="chatbox">
                            <div className="modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="msg-head">
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="d-flex align-items-center">
                                                    <span className="chat-icon"><img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/arroleftt.svg" alt="image title" /></span>
                                                    <div className="flex-shrink-0">
                                                        <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h3>Mehedi Hasan</h3>
                                                        <p>front end developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <ul className="moreoption">
                                                    <li className="navbar nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg></a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                                            <li>
                                                                <hr className="dropdown-divider" />
                                                            </li>
                                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="modal-body">
                                        <div className="msg-body">
                                            <ul>
                                                <li className="sender">
                                                    <p> Hey, Are you there? </p>
                                                    <span className="time">10:06 am</span>
                                                </li>
                                                <li className="sender">
                                                    <p> Hey, Are you there? </p>
                                                    <span className="time">10:16 am</span>
                                                </li>
                                                <li className="repaly">
                                                    <p>yes!</p>
                                                    <span className="time">10:20 am</span>
                                                </li>
                                                <li className="sender">
                                                    <p> Hey, Are you there? </p>
                                                    <span className="time">10:26 am</span>
                                                </li>
                                                <li className="sender">
                                                    <p> Hey, Are you there? </p>
                                                    <span className="time">10:32 am</span>
                                                </li>
                                                <li className="repaly">
                                                    <p>How are you?</p>
                                                    <span className="time">10:35 am</span>
                                                </li>
                                                <li>
                                                    <div className="divider">
                                                        <h6>Today</h6>
                                                    </div>
                                                </li>

                                                <li className="repaly">
                                                    <p> yes, tell me</p>
                                                    <span className="time">10:36 am</span>
                                                </li>
                                                <li className="repaly">
                                                    <p>yes... on it</p>
                                                    <span className="time">junt now</span>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>


                                    <div className="send-box">
                                        <form action="">
                                            <input type="text" className="form-control" aria-label="message…" placeholder="Write message…" />

                                            <button type="button"><i className="fa fa-paper-plane" aria-hidden="true"></i> Send</button>
                                        </form>

                                        <div className="send-btns">
                                            <div classNameName="attach">
                                                <div className="button-wrapper">
                                                    <span className="label">
                                                        <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/upload.svg" alt="image title" /> attached file 
                                                    </span><input type="file" name="upload" id="upload" className="upload-box" placeholder="Upload File" aria-label="Upload File" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
         
    </section>

        </>
    );
}
export default ChatBox;