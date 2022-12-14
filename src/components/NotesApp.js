import React from "react";
import NoteList from "./note-list";
import {getData} from '../utils/data';
import SearchNote from "./search-note";
import FormNoteInput from "./form-note-input";

class NotesApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: getData(),
            keyword: '',
        }
        this.onSearch = this.onSearch.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onSearch(event) {
        this.setState((() => {
            return {
                keyword: event.target.value,
            }
        }))
    }
    
    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({notes})
    }

    onArchiveHandler(id){
        const notes = this.state.notes.map(note => note.id === id ? {...note, archived: !note.archived}: note)
        this.setState({notes})
    }

    onAddNoteHandler({title, body}){
        this.setState((prevState)=>{
            return{
                notes: [
                ...prevState.notes,
                {
                    id: +new Date(),
                    title,
                    body,
                    createdAt: +new Date(),
                    archived: false
                }
                ]
            }
        })
    }

    render(){
        const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.keyword.toLowerCase()));
        
        const unArchived_Note = notes.filter((note) => {
            return note.archived === false;
        });
        
        const archived_Note = notes.filter((note) => {
            return note.archived === true;
        });

        return(
            <div className="note-app">
                <SearchNote keyword={this.state.keyword} onSearch={this.onSearch}/>
                <div className="note-app_body">
                    <FormNoteInput addNote={this.onAddNoteHandler}/>
                    <div className="bottom-body">
                        <h1>Catatan Aktif</h1>
                        <NoteList notes={unArchived_Note} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
                        <h1>Arsip</h1>
                        <NoteList notes={archived_Note} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotesApp;