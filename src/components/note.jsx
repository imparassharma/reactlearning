import React from "react";
import notes from "./notes";
import CreateNote from "./CreateNote";

function Note(){
    return(
        <div className="note">
           {notes.map(note=>(
            <CreateNote
            key= {note.id}
            content = {note.content}
            />
           ))}
        </div>
    );
}

export default Note;