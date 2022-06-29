import React from "react";

function CreateNote(props){
    return(
    <div className="note-container">
        <p>{props.content}</p>
    </div>
    )
}

export default CreateNote;