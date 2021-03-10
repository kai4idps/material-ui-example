import React, { Fragment, useState } from "react";
import EmailLists from "../../components/email/emailList";
import EmailSidebar from "../../components/email/emailSidebar";
import EmailActions from "../../components/email/emailActions";
import EmailSearch from "../../components/email/emailSearch";
import EmailContent from "../../components/email/emailContent";

export default () => {

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setshowRight] = useState(false);

    const showLeftPart = () => {
        setShowLeft(!showLeft);
    }

    const showRightPart = () => {
        setshowRight(!showRight);
    }

    return (
        <Fragment>
            <div className="email-app">
                <div className={"left-part bg-white " + (showLeft === true ? "show-panel" : "")}>
                    <EmailSidebar />
                </div>
                <div className="right-part contact-list bg-white">
                    <div className={"right-left-part " + (showRight === true ? "show-right-left-panel" : "")}>
                        <span onClick={() => { showLeftPart.bind(null); }} className={"bg-primary show-left-part text-white d-block d-lg-none " + (showLeft === true ? "left-part-open" : "")}><i className={(showLeft === true ? "fas fa-chevron-left" : "fas fa-chevron-right")}></i></span>
                        <EmailSearch />
                        <EmailActions />
                        <EmailLists showRightPart={() => { showRightPart.bind(null); }} />
                    </div>
                    <div className={"right-right-part " + (showRight === true ? "show-right-right-panel" : "")}>
                        <span onClick={() => { showRightPart.bind(null); }} className={"hide-right-right-part d-block d-md-none " + (showRight === true ? "right-right-part-open" : "")}><i className="fas fa-times"></i></span>
                        <EmailContent />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
