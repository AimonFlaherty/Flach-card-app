import React from "react";
import {useHistory} from "react-router-dom";


function CreateBtn(){
    const history = useHistory();
    return (
        <button type="button" className="btn btn-secondary" onClick={()=> history.push("/decks/new")}>
            + Create Deck
        </button>
        );
}


export default CreateBtn;