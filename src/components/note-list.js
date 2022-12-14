import React from "react";
import NoteItem from "./note-item";

const emptyList = <p className="empty-list">tidak ada catatan</p>;

function NoteList({notes, onDelete, onArchive}) {

    return(
        notes.length > 0 ?
        <div className="note-List">
            {
                notes.map((note)=>(
                    <NoteItem
                    key={note.id} 
                    id={note.id}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    onUndo
                    {...note} />
                ))
            }
        </div> : emptyList
    )
}

export default NoteList;