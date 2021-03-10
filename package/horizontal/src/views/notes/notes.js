import React, { Fragment, useState } from "react";

import NoteList from "../../components/notes/noteList";
import NoteSearch from "../../components/notes/noteSearch";
import NoteContent from "../../components/notes/noteContent";
import './notes.css';
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
            <div className="chat-list">
                <div className={"left-part bg-white " + (showLeft === true ? "show-panel" : "")}>
                    <NoteSearch/>
                    <NoteList showRightPart={showRightPart.bind(null)}/>
                   
                </div>
                <div className="right-part bg-white chat-list">
                    <div className={"" + (showRight === true ? "show-right-left-panel" : "")}>
                        <span onClick={showLeftPart.bind(null)} className={"bg-primary show-left-part text-white d-block d-lg-none " + (showLeft === true ? "left-part-open" : "")}><i className={(showLeft === true ? "fas fa-chevron-left" : "fas fa-chevron-right")}></i></span>
                        <NoteContent/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
