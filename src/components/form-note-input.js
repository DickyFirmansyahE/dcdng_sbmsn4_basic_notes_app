import React from "react";

class FormNoteInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: '',
            limitChar: 50,
            body: '',
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeHandler(event){
        if(this.state.limitChar >= 0 && event.target.value.length <= 50){
            this.setState((s) => {
              return {
                title : event.target.value,
                limitChar: 50 - event.target.value.length
              }
            });
          }
      }
      
    onBodyChangeEventHandler(event){
        this.setState(()=>{
            return{
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state)
    }
    
    render(){
        return(
            <div className="upper-note-app_body">
                <h1>Buat Catatan</h1>
                <form className="form-input_note" onSubmit={this.onSubmitEventHandler}>
                    <p className="title-limitChar">
                        Sisa Karakter : {this.state.limitChar}
                    </p>
                    <input className="input-title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeHandler}/>
                    <textarea className="input-note" type="text" placeholder="Tuliskan catatanmu di sini ...  " value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default FormNoteInput;
