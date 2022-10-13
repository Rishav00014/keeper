import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
    const [note,setNote]=useState({
        title : "",
        content : "",
    });
    const [size,setSize] =useState(false);

    function handleNote(event){
        const {name,value} =event.target;

        setNote((preValue)=> {
            return {...preValue,[name]: value}
        });
    }
    function handelSize(){
        setSize(true);
    }


    return (
        <div>
        <form className="create-note">
            {size && <input name="title" placeholder="Title" onChange={handleNote} value={note.title}/>}
            <textarea name="content" onClick={handelSize} onChange={handleNote} value={note.content} placeholder="Take a note..." rows={size ? 3 : 1 }/>
            <Zoom in={size}><Fab onClick={(event)=>{ 
                props.addNote(note);
                setNote(()=>{ return {
                    title : "",
                    content : "",
                }});
                event.preventDefault();
            }}><AddIcon/></Fab></Zoom>
        </form>
        </div>
    );
}

export default CreateArea;