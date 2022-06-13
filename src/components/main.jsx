import React from "react";
import Note from "./note";

function Main(){
    return(
    <div className="main">
    <Note content="This is note1"/>
    <Note content="This is note2"/>
    <Note content="This is note3"/>
    <Note content="This is note4"/>
    </div>
    );
}

export default Main;