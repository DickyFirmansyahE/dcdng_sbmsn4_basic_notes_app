import React from "react";
import NoteItemBody from "./note-itemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";


function NoteItem({id, title, body, createdAt, onDelete, onArchive, archived}) {
    return(
        <div className="note_item">
            <div className="note-item_card">
                <NoteItemBody title={title} body={body} createdAt={createdAt}/>
            </div>
            <div className="note-card_button">
                <DeleteButton id={id} onDelete={onDelete}/>
                <ArchiveButton id={id} onArchive={onArchive} archived={archived}/>
            </div>
        </div>
    )
}

export default NoteItem;