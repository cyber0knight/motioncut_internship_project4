import React, { useState } from "react";

export default function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(props.content);
  const [cross, setCross] = useState(false);

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    props.onEdit(props.id, editedContent);
    setIsEditing(false);
  }

  function handleChange(event) {
    setEditedContent(event.target.value);
  }

  function handleCross(event) {
    setCross(!cross);
  }

  return (
    <div className={`note ${isEditing ? 'note-editing' : ''} `}>
      {isEditing ? 
        ( 
          <div className="editForm">
                <textarea value={editedContent} onChange={handleChange} rows= "3" />
          </div>
        ) : 
        ( <p className={`${cross ? 'text-cross':''}`}>{props.content}</p> )
      }

      <button onClick={handleDelete}>
        <img src="./images/delete.png" style={{ width: "21px", color: "white" }} alt="Delete"/>
      </button>

      {isEditing ? 
        (<button onClick={handleSave}><img src="./images/ok.png" style={{ width: "29px", color: "white" }} alt="Delete"/></button>) : 
        ( 
          <button onClick={handleEdit}>
            <img src="./images/edit.png" style={{ width: "21px", color: "white" }} alt="Edit" />
          </button>
        )
      }

      {isEditing ? 
        '' : 
        ( 
          <button onClick={handleCross}>
            <img src="./images/cross.png" style={{ width: "21px", color: "white" }} alt="Edit" />
          </button>
        )
      }
    </div>
  );
}
