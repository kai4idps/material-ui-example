import React, { useState, Fragment } from "react";

import ContactsFilter from "../../components/contacts/contactsFilter";
import ContactsSearch from "../../components/contacts/contactsSearch";
import ContactsList from "../../components/contacts/contactsList";
import ContactsDetails from "../../components/contacts/contactsDetails";

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
            <div className="contact-app">
                <div className={"left-part bg-white " + (showLeft === true ? "show-panel" : "")}>
                    <ContactsFilter />
                </div>
                <div className="right-part contact-list bg-white">
                    <div className={"right-left-part " + (showRight === true ? "show-right-left-panel" : "")}>
                        <span onClick={() => { showLeftPart.bind(null); }} className={"bg-primary show-left-part text-white d-block d-lg-none " + (showLeft === true ? "left-part-open" : "")}><i className={(showLeft === true ? "fas fa-chevron-left" : "fas fa-chevron-right")}></i></span>
                        <ContactsSearch />
                        <ContactsList showRightPart={() => { showRightPart.bind(null); }} />
                    </div>
                    <div className={"right-right-part " + (showRight === true ? "show-right-right-panel" : "")}>
                        <span onClick={() => { showRightPart.bind(null); }} className={"hide-right-right-part d-block d-md-none " + (showRight === true ? "right-right-part-open" : "")}><i className="fas fa-times"></i></span>
                        <ContactsDetails />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
