import React, { useState } from "react";



import Header from "./Header"
import Footer from "./Footer";
import Note from "./Note";
import TypeArea from "./CreateArea";

function App() {
    const [noteObj,setNoteObj]=useState([]);

    function addNote(note){
        setNoteObj((preValue)=>{
            return [...preValue,note]
        });
    }
    function deleteNode(id){
        setNoteObj((preValue)=>{
            return preValue.filter((item,index)=> {
                return index !== id;
            })
        });
    }

    return(
        <div>
            <Header />
            <TypeArea addNote={addNote}/>
            {noteObj.map((LI,index) => (
                <Note 
                    key ={index} 
                    id={index}
                    delete={deleteNode}
                    title ={LI.title} 
                    content ={LI.content} 
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;