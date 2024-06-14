import React, { useState } from 'react'

export default function InputBox(props) {

    const [note, setNote] = useState();

    function handleChange(event){
        const value = event.target.value;
        setNote(value);
        event.preventDefault();
    }

    function submitNewList(event) {
        props.onAdd(note);
        setNote("");
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <textarea 
                    name='content' 
                    onChange={handleChange}
                    placeholder='Add a List...'
                    value = {note}
                    rows = "4"
                />
                <button onClick={submitNewList}>Add</button>
            </form>
        </div>
    )
}
